import React from 'react';
import { useGameContext } from '../store/GameState';
import Letter from './Letter';
import styles from './Keyboard.module.css';
import EnterButton from './EnterButton';
import DeleteButton from './DeleteButton';

function Keyboard({ answerWord, wordPool }) {
    const [state] = useGameContext();
    const { letters } = state;

    return (
        <div className={styles.keyboardContainer}>
            <div className={styles.lettersContainer}>
                {letters.map(letter => {
                    if (letter.value === 'enter') {
                        return <EnterButton answerWord={answerWord} wordPool={wordPool} />;
                    } else if (letter.value === 'delete') {
                        return <DeleteButton />;
                    } else {
                        return(
                            <Letter
                                key={letter.value}
                                value={letter.value}
                                answerWord={answerWord}
                                inWord={letter.isInWord}
                                correctSpot={letter.inCorrectSpot}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Keyboard;