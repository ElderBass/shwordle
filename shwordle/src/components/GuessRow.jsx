import React, { useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import GuessSquare from './GuessSquare';
import styles from './GuessRow.module.css';

function GuessRow(props) {
    const { rowNumber } = props;
    const [state, dispatch] = useGuessContext();
    const { currentGuess, guessNumber, previousGuesses } = state;
    const isCurrentRow = rowNumber === guessNumber;

    function getGuessLetter(index) {
        let result;
        if (guessNumber > rowNumber) {
            const previousGuess = previousGuesses.filter(guess => guess.guessNumber === rowNumber);
            const letter = previousGuess[0] && previousGuess[0].guess[index];
            result = letter;              
        } else {
            result = currentGuess[index] && isCurrentRow ? currentGuess[index] : '';
        }
        return result || '';
    }
    return (
        <div className={styles.guessRow}>
            <GuessSquare letter={getGuessLetter(0)} index={0} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(1)} index={1} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(2)} index={2} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(3)} index={3} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(4)} index={4} rowNumber={rowNumber} />
        </div>
    )
}

export default GuessRow;