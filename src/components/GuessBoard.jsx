import React from 'react';
import NotInWordList from './NotInWordList';
import GuessRow from './GuessRow';
import styles from './GuessBoard.module.css';

function GuessBlock({ answerWord, guessWord, notInWordList = false }) {
    return (
        <div className={styles.guessBlockContainer}>
            {notInWordList && <NotInWordList word={guessWord} />}
            {[1, 2, 3, 4, 5, 6].map((rowNumber) => (
                <GuessRow key={rowNumber} answerWord={answerWord} rowNumber={rowNumber} />
            ))}
        </div>
    );
}

export default GuessBlock;
