import React from 'react';
import GuessRow from './GuessRow';
import styles from './GuessBlock.module.css';

function GuessBlock({ answerWord }) {
    return (
        <div className={styles.guessBlockContainer}>
            {[1, 2, 3, 4, 5, 6].map(rowNumber => (
                <GuessRow
                    key={rowNumber}
                    answerWord={answerWord}
                    rowNumber={rowNumber}
                />
            ))}
        </div>
    );
}

export default GuessBlock;