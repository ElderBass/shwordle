import React from 'react';
import { useGuessContext } from '../store/GuessState';
import Letter from './Letter';
import EnterButton from './EnterButton';
import DeleteButton from './DeleteButton';
import Toolbar from './Toolbar';
import styles from './Keyboard.module.css';

function Keyboard({ answerWord, wordPool }) {
    const [state] = useGuessContext();
    const { letters } = state;

    return (
        <div className={styles.keyboardContainer}>
            <EnterButton answerWord={answerWord} wordPool={wordPool} />
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
            <DeleteButton />
            {/* <Toolbar answerWord={answerWord} wordPool={wordPool} /> */}
        </div>
    );
}

export default Keyboard;