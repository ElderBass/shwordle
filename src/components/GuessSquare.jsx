import React, { useEffect, useState } from 'react';
import { useGameContext } from '../store/GameState';
import { getLetterCount, getPreviousGuessLetters, getTimesLetterIsInCorrectSpotAfterIndex } from '../utils/guessSquareUtils';
import styles from './GuessSquare.module.css';

function GuessSquare({ letter = '', rowNumber, index, answerWord }) {
    const [state] = useGameContext();
    const { previousGuesses, guessNumber, currentGuess, isWinningGame, lauraMode, endGameGuessNumber } = state;
    const isPreviousRow = rowNumber === guessNumber - 1;

    const [classes, setClasses] = useState(null);

    useEffect(() => {
        let classNames = styles.guessSquare;
        if (isWinningGame && rowNumber === endGameGuessNumber) {
            setClasses(classNames + ` ${styles.inCorrectSpot}`);
        } else if (rowNumber === 1 && currentGuess.length === 0 && lauraMode) {
            setClasses(classNames);
        }
    }, [isWinningGame, previousGuesses, lauraMode, currentGuess, endGameGuessNumber, rowNumber]);

    useEffect(() => {
        if (previousGuesses.length === 0 || !isPreviousRow) return;

        let classNames = styles.guessSquare;
        if (isWinningGame && rowNumber === endGameGuessNumber) {
            classNames += ` ${styles.inCorrectSpot}`;
        } else {
            const previousGuessLetters = getPreviousGuessLetters(previousGuesses, rowNumber);
            const answerWordArr = answerWord.split('');

            if (answerWordArr.includes(letter)) {
                if (answerWord[index] === letter) {
                    classNames += ` ${styles.inCorrectSpot}`;
                } else {
                    const timesLetterIsInAnswer = getLetterCount(answerWordArr, letter);
                    const timesLetterIsInPreviousGuess = getLetterCount(previousGuessLetters, letter);

                    const timesLetterIsInCorrectSpotAfterThisIndex = 
                        getTimesLetterIsInCorrectSpotAfterIndex(previousGuessLetters, answerWordArr, letter, index);

                    if (timesLetterIsInAnswer >= timesLetterIsInPreviousGuess) {
                        classNames += ` ${styles.isInWord}`;
                    } else if (timesLetterIsInPreviousGuess > timesLetterIsInAnswer) {
                        if (
                            timesLetterIsInPreviousGuess >
                            timesLetterIsInCorrectSpotAfterThisIndex
                        ) {
                            classNames += ` ${styles.notInWord}`;
                        }
                    } else {
                        classNames += ` ${styles.isInWord}`;
                    }
                }
            } else {
                classNames += ` ${styles.notInWord}`;
            }
        }
        setClasses(classNames);
    }, [
        previousGuesses,
        isPreviousRow,
        answerWord,
        letter,
        index,
        rowNumber,
        currentGuess,
        isWinningGame,
        lauraMode,
    ]);

    return <div className={classes || styles.guessSquare}>{letter}</div>;
}

export default GuessSquare;
