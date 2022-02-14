import React from 'react';
import styles from './GuessSquare.module.css';

function GuessSquare({ guessLetter }) {
    return (
        <div className={styles.guessSquare}>
            {guessLetter}
        </div>
    )
}