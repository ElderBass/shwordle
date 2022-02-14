import React from 'react';
import styles from './GuessBlock.module.css';
import GuessRow from './GuessRow';

function GuessBlock() {
    return (
        <div className={styles.guessBlockContainer}>
            <GuessRow />
            <GuessRow />
            <GuessRow />
            <GuessRow />
            <GuessRow />
        </div>
    );
}

export default GuessBlock;