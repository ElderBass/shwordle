import React from 'react';
import GuessRow from './GuessRow';
import styles from './GuessBlock.module.css';

function GuessBlock() {
    return (
        <div className={styles.guessBlockContainer}>
            <GuessRow />
            <GuessRow />
            <GuessRow />
            <GuessRow />
            <GuessRow />
            <GuessRow />
        </div>
    );
}

export default GuessBlock;