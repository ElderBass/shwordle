import React, { useEffect, useState } from 'react';
import { useGameContext } from '../store/GameState';
import * as GuessActions from '../store/actions/guesses';
import styles from './Letter.module.css';

function Letter(props) {
    const { value, inWord, correctSpot } = props;
    const [classes, setClasses] = useState('');
    const [state, dispatch] = useGameContext();
    const { currentGuess, guessedLetters, isGameOver } = state;

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
        if (isGameOver) return;
        if (currentGuess.length === 5) {
            alert('You can\'t guess any more letters, bro.');
            return;
        }
        const guess = currentGuess;
        guess.push(value);
        dispatch(GuessActions.addLetter(guess));
        console.log('\n updated state after add letter to guess = ', state, '\n');
    }

    return (
        <div className={classes} onClick={addLetterToGuess}>
            {value}
        </div>
    );
};

export default Letter;