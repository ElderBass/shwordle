import React, { useEffect, useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import GuessSquare from './GuessSquare';
import styles from './GuessRow.module.css';

function GuessRow(props) {
    const { answerWord, number } = props;
    const [state, dispatch] = useGuessContext();
    const { currentGuess, guessNumber, previousGuesses } = state;

    const [rowLetters, setRowLetters] = useState(null);

    const isCurrentRow = number === guessNumber;

    useEffect(() => {
        if (!isCurrentRow) {
            console.log('\n idk yet \n');
        }
        const row = {
            letter1: currentGuess[0] && isCurrentRow ? currentGuess[0] : '',
            letter2: currentGuess[1] && isCurrentRow ? currentGuess[1] : '',
            letter3: currentGuess[2] && isCurrentRow ? currentGuess[2] : '',
            letter4: currentGuess[3] && isCurrentRow ? currentGuess[3] : '',
            letter5: currentGuess[4] && isCurrentRow ? currentGuess[4] : '',
        }
        setRowLetters(row);
    }, [currentGuess, isCurrentRow, previousGuesses])

    function getGuessLetter(index) {
        if (previousGuesses.length) {
            for (let i = 0; i < previousGuesses.length; i++) {
                if (previousGuesses[i].guessNumber === number) {
                    const guessLetters = previousGuesses[i].guess;
                    return guessLetters[index];
                    // setRowLetters({
                    //     letter1: guessLetters[0],
                    //     letter2: guessLetters[1],
                    //     letter3: guessLetters[2],
                    //     letter4: guessLetters[3],
                    //     letter6: guessLetters[4],
                    // });
                    // return;
                }
            }
        } else {
            return currentGuess[index] && isCurrentRow ? currentGuess[index] : '';
        }
    }
    return (
        <div className={styles.guessRow}>
            <GuessSquare letter={getGuessLetter(0)} />
            <GuessSquare letter={getGuessLetter(1)} />
            <GuessSquare letter={getGuessLetter(2)} />
            <GuessSquare letter={getGuessLetter(3)} />
            <GuessSquare letter={getGuessLetter(4)} />
        </div>
    )
}

export default GuessRow;