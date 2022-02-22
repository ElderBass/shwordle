import React from 'react';
import GuessRow from './GuessRow';
import styles from './GuessBlock.module.css';

function GuessBlock({ answerWord }) {
    return (
        <div className={styles.guessBlockContainer}>
            <GuessRow answerWord={answerWord} rowNumber={1} />
            <GuessRow answerWord={answerWord} rowNumber={2} />
            <GuessRow answerWord={answerWord} rowNumber={3} />
            <GuessRow answerWord={answerWord} rowNumber={4} />
            <GuessRow answerWord={answerWord} rowNumber={5} />
            <GuessRow answerWord={answerWord} rowNumber={6} />
        </div>
    );
}

export default GuessBlock;