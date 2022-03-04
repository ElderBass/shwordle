import React from 'react';
import { useGuessContext } from '../store/GuessState';
import GuessSquare from './GuessSquare';
import styles from './GuessRow.module.css';

function GuessRow(props) {
    const { rowNumber, answerWord } = props;
    const [state] = useGuessContext();
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
            {[0, 1, 2, 3, 4].map(index => (
                <GuessSquare 
                    key={index}
                    rowNumber={rowNumber}
                    answerWord={answerWord}
                    index={index}
                    letter={getGuessLetter(index)}
                />
            ))}
        </div>
    )
}

export default GuessRow;