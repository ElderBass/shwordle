import React from 'react';
import styles from './GuessRow.module.css';
import GuessSquare from './GuessSquare';

function GuessRow(props) {
    const { letters } = props;
    return (
        <div className={styles.guessRow}>
            <GuessSquare />
            <GuessSquare />
            <GuessSquare />
            <GuessSquare />
            <GuessSquare />
        </div>
    )
}

export default GuessRow;