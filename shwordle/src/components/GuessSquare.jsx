import React, { useEffect, useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import { getClassNames } from '../utils/letterColorUtils';
import styles from './GuessSquare.module.css';

function GuessSquare({ letter = '', rowNumber, isInWrongSpot }) {
    console.log('\n letter in guess square = ', letter, '\n');
    const [state, dispatch] = useGuessContext();
    const { letters, previousGuesses, guessNumber } = state;
    const isPreviousGuess = previousGuesses.filter(guess => guess.guessNumber === rowNumber).length === 1;

    const letterArray = letters.filter(lett => lett.value === letter) || [];
    const letterObject = letterArray.length && letterArray[0];

    const [classes, setClasses] = useState(null);
    const [hasBeenGuessed, setHasBeenGuessed] = useState(isPreviousGuess);

    useEffect(() => {
        if (previousGuesses.length === 0) return;
        const previousGuessObject = previousGuesses.filter(guess => rowNumber === guess.guessNumber);
        const previousGuessLetters = previousGuessObject.length && previousGuessObject[0].guess;
        const guessLetter = previousGuessLetters.length && previousGuessLetters.filter(letter => letter === letterObject.value); 

        if (guessLetter && guessLetter.length && !hasBeenGuessed && guessNumber !== rowNumber) {
            let letterPayload;
            if (isInWrongSpot) {
                console.log('\n in wrong spot fuck me \n');
                console.log(`\n rowNumber = ${rowNumber}, letter = ${letter}`);
                letterPayload = { value: letterObject.value, isInWord: true, inCorrectSpot: false };
            } else {
                letterPayload = letterObject;
            }
            setClasses(getClassNames(styles, letterPayload));
            setHasBeenGuessed(true);
        }
        
    }, [letters, letter, letterObject, rowNumber, hasBeenGuessed, previousGuesses])


    return (
        <div className={classes || styles.guessSquare}>
            {letter}
        </div>
    )
}

export default GuessSquare;