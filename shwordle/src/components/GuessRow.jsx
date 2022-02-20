import React, { useEffect, useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import GuessSquare from './GuessSquare';
import styles from './GuessRow.module.css';

function GuessRow(props) {
    const { answerWord, number } = props;
    const [state, dispatch] = useGuessContext();
    const { currentGuess, guessNumber } = state;

    const [rowLetters, setRowLetters] = useState({});

    const isCurrentRow = number === guessNumber;

    useEffect(() => {
        const row = {
            letter1: currentGuess[0] && isCurrentRow ? currentGuess[0] : '',
            letter2: currentGuess[1] && isCurrentRow ? currentGuess[1] : '',
            letter3: currentGuess[2] && isCurrentRow ? currentGuess[2] : '',
            letter4: currentGuess[3] && isCurrentRow ? currentGuess[3] : '',
            letter5: currentGuess[4] && isCurrentRow ? currentGuess[4] : '',
        }
        setRowLetters(row);
    }, [currentGuess, isCurrentRow]);

    return (
        <div className={styles.guessRow}>
            <GuessSquare letter={rowLetters.letter1} />
            <GuessSquare letter={rowLetters.letter2} />
            <GuessSquare letter={rowLetters.letter3} />
            <GuessSquare letter={rowLetters.letter4} />
            <GuessSquare letter={rowLetters.letter5} />
        </div>
    )
}

export default GuessRow;