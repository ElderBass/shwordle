import React from 'react';
import GuessRow from './GuessRow';
import styles from './GuessBlock.module.css';

function GuessBlock({ answerWord }) {
    return (
        <div className={styles.guessBlockContainer}>
            <GuessRow answerWord={answerWord} number={1} />
            <GuessRow answerWord={answerWord} number={2} />
            <GuessRow answerWord={answerWord} number={3} />
            <GuessRow answerWord={answerWord} number={4} />
            <GuessRow answerWord={answerWord} number={5} />
            <GuessRow answerWord={answerWord} number={6} />
        </div>
    );
}

export default GuessBlock;