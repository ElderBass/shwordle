import React, { useEffect, useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import styles from './GuessSquare.module.css';

function GuessSquare({ letter = '', rowNumber, index, answerWord }) {
    const [state, dispatch] = useGuessContext();
    const { previousGuesses, guessNumber, currentGuess, isWinningGame, letters } = state;
    const isPreviousRow = rowNumber === guessNumber - 1;
    const letterObject = letters.filter(lettr => lettr.value === letter)[0];

    const [classes, setClasses] = useState(null);

    useEffect(() => {
        if (previousGuesses.length === 0 || !isPreviousRow) return;
        
        let classNames = styles.guessSquare;
        if (isWinningGame) {
            classNames += ` ${styles.inCorrectSpot}`;
        } else {
            const previousGuessLetters = previousGuesses.filter(guess => guess.guessNumber === rowNumber)[0].guess;
            const answerWordArr = answerWord.split('');

            if (answerWordArr.includes(letter)) {
                let indecesOfLetterInAnswer = [];
                answerWordArr.forEach((lettr, i) => {
                    if (lettr === letter) {
                        indecesOfLetterInAnswer.push({ letter: lettr, index: i });
                    }
                });
                const timesLetterIsInAnswer = indecesOfLetterInAnswer.length;
                const timesLetterIsInPreviousGuess = previousGuessLetters.filter(lettr => lettr === letter).length;
                if (answerWord[index] === letter) {
                    classNames += ` ${styles.inCorrectSpot}`;
                } else if (timesLetterIsInPreviousGuess > timesLetterIsInAnswer) {
                    if (letterObject.inCorrectSpot) {
                        classNames += ` ${styles.notInWord}`;
                    } else {
                        classNames += ` ${styles.isInWord}`;
                    }
                }
            } else {
                classNames += ` ${styles.notInWord}`;
            }
        }
        setClasses(classNames);
    }, [previousGuesses, isPreviousRow, answerWord, letter, index, rowNumber, currentGuess, isWinningGame]);

    return (
        <div className={classes || styles.guessSquare}>
            {letter}
        </div>
    )
}

export default GuessSquare;