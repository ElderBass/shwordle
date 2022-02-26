import React, { useEffect, useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import * as GuessActions from '../store/actions/guesses';
import { compareGuessWithAnswer, isWinningGuess } from '../utils/guessingUtils';
import styles from './Letter.module.css';
import { getEndGameAlertMessage, setPlayerStats } from '../utils/gameOverUtils';

function Letter(props) {
    const { value, inWord, correctSpot, answerWord } = props;
    const [classes, setClasses] = useState('');
    const [state, dispatch] = useGuessContext();
    const { currentGuess, guessedLetters, guessNumber, isGameOver } = state;

    const LOSING_GAME_MESSAGE = 'Lol sucks to suck';

    useEffect(() => {
        let classNames = styles.letter;
        if (inWord) {
            if (correctSpot) {
                classNames += ` ${styles.inCorrectSpot}`;
            } else {
                classNames += ` ${styles.isInWord}`;
            }
        } else {
            if (guessedLetters.includes(value)) {
                classNames += ` ${styles.notInWord}`;
            } 
        }
        setClasses(classNames);
    }, [inWord, correctSpot, guessedLetters, value]);


    function addLetterToGuess() {
        if (currentGuess.length === 5) {
            alert('You can\'t guess any more letters, bro.');
            return;
        }
        const guess = currentGuess;

        guess.push(value);
        dispatch(GuessActions.addLetter(guess));
        console.log('\n updated state after add letter to guess = ', state, '\n');
    }

    function handleDeleteLetter() {
        if (currentGuess.length === 0) return;
        const updatedGuess = currentGuess;
        updatedGuess.pop();
        dispatch(GuessActions.deleteLetter(updatedGuess));
        console.log('\n updated state after deleting letter = ', state, '\n');
    }

    function guessWordHandler() {
        if (currentGuess.length < 5) return;
        const comparisonResults = compareGuessWithAnswer(currentGuess, answerWord);
        dispatch(GuessActions.guessWord(comparisonResults));
        const isWin = isWinningGuess(comparisonResults, answerWord);
        if (isWin || guessNumber === 6) {
            const endMessage = isWin ? getEndGameAlertMessage(guessNumber) : LOSING_GAME_MESSAGE;
            dispatch(GuessActions.endGame({ isWin, comparisonResults }));
            // TODO: Turn this into a modal that gets dispatch on SHOW_STATS action ?
            alert(endMessage);
            setPlayerStats({ isWin, numberOfGuesses: guessNumber, answerWord });
        }
        console.log('\n updated state after guessing word = ', state, '\n');
    }

    function getOnclickFunction(e) {
        if (isGameOver) return;
        let onClickFunction;
        switch (value) {
            case 'Delete':
                onClickFunction = handleDeleteLetter;
                break;
            case 'Enter':
                onClickFunction = guessWordHandler;
                break;
            default:
                onClickFunction = addLetterToGuess;
                break;
        }
        onClickFunction(e);
    }

    return (
        <div className={classes} onClick={getOnclickFunction}>
            {value}
        </div>
    )
};

export default Letter;