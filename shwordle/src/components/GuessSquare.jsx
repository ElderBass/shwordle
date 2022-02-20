import React from 'react';
import styles from './GuessSquare.module.css';

function GuessSquare({ letter }) {
    return (
        <div className={styles.guessSquare}>
            {letter}
        </div>
    )
}

export default GuessSquare;