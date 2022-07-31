import React, { useEffect, useState } from 'react';
import { useGameContext } from '../store/GameState';
import styles from './Letter.module.css';

function Letter(props) {
    const { value, inWord, correctSpot, onLetterClick } = props;
    const [classes, setClasses] = useState('');
    const [state] = useGameContext();
    const { guessedLetters } = state;

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


    return (
        <div className={classes} onClick={() => onLetterClick(value)}>
            {value}
        </div>
    );
};

export default Letter;