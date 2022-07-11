import React from 'react';
import { useGameContext } from '../store/GameState';
import Letter from './Letter';
import styles from './Keyboard.module.css';
import ActionButton from './ActionButton';

function Keyboard({ answerWord, onGuessWord, onLetterClick, onDelete }) {
    const [state] = useGameContext();
    const { letters } = state;

    const ACTION_PROPS = {
        Enter: {
            onClick: onGuessWord,
            styles: styles.enterBtn,
            text: 'Enter',
        },
        Backspace: {
            onClick: onDelete,
            styles: styles.deleteBtn,
            text: 'Delete',
        },
    };

    return (
        <div className={styles.keyboardContainer}>
            <div className={styles.lettersContainer}>
                {letters.map((letter) => {
                    if (letter.value === 'Enter' || letter.value === 'Backspace') {
                        return <ActionButton key={letter.value} {...ACTION_PROPS[letter.value]} />;
                    } else {
                        return (
                            <Letter
                                key={letter.value}
                                value={letter.value}
                                answerWord={answerWord}
                                inWord={letter.isInWord}
                                correctSpot={letter.inCorrectSpot}
                                onLetterClick={onLetterClick}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Keyboard;
