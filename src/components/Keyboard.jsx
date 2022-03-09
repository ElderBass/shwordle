import React from 'react';
import { useGameContext } from '../store/GameState';
import Letter from './Letter';
import Toolbar from './Toolbar';
import styles from './Keyboard.module.css';

function Keyboard({ answerWord, wordPool }) {
    const [state] = useGameContext();
    const { letters } = state;

    return (
        <div className={styles.keyboardContainer}>
            <div className={styles.lettersContainer}>
                {letters.map(letter => (
                    <Letter
                        key={letter.value}
                        value={letter.value}
                        answerWord={answerWord}
                        inWord={letter.isInWord}
                        correctSpot={letter.inCorrectSpot}
                    />
                ))}
            </div>
            <Toolbar answerWord={answerWord} wordPool={wordPool} />
        </div>
    );
}

export default Keyboard;