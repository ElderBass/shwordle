import React from 'react';
import { useGuessContext } from '../store/GuessState';
import Letter from './Letter';
import styles from './Keyboard.module.css';

function Keyboard({ answerWord }) {
    const [state, dispatch] = useGuessContext();
    const { letters } = state;

    return (
        <div className={styles.keyboardContainer}>
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
    );
}

export default Keyboard;