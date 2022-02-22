import React, { useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import GuessSquare from './GuessSquare';
import styles from './GuessRow.module.css';

function GuessRow(props) {
    const { rowNumber } = props;
    const [state, dispatch] = useGuessContext();
    const { currentGuess, guessNumber, previousGuesses } = state;
    const isCurrentRow = rowNumber === guessNumber;

    const [isInWrongSpot, setIsInWrongSpot] = useState(false);

    function getGuessLetter(index) {
        let result;
        if (previousGuesses.length) {
            for (let i = 0; i < previousGuesses.length; i++) {
                if (previousGuesses[i].guessNumber === rowNumber) {
                    const prevRowGuess = previousGuesses[i - 0].guess;
                    const currentRowLetters = previousGuesses[i].guess;
                    const currentLetter = currentRowLetters[index];
                    const prevRowLetterIndex = prevRowGuess.indexOf(currentLetter);
                    console.log('\n are we hitting this? inside prevGuessNum = rowNum \n')
                    if (index !== prevRowLetterIndex) {
                        console.log('\n are we hitting this? inside i!== index check \n')
                        setIsInWrongSpot(true);
                    }
                    return currentLetter;                 
                } else {
                    result = currentGuess[index] && isCurrentRow ? currentGuess[index] : '';
                }
            }
        } else {
            result = currentGuess[index] && isCurrentRow ? currentGuess[index] : '';
        }
        
        return result || '';
    }
    return (
        <div className={styles.guessRow}>
            <GuessSquare letter={getGuessLetter(0)} isInWrongSpot={isInWrongSpot} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(1)} isInWrongSpot={isInWrongSpot} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(2)} isInWrongSpot={isInWrongSpot} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(3)} isInWrongSpot={isInWrongSpot} rowNumber={rowNumber} />
            <GuessSquare letter={getGuessLetter(4)} isInWrongSpot={isInWrongSpot} rowNumber={rowNumber} />
        </div>
    )
}

export default GuessRow;