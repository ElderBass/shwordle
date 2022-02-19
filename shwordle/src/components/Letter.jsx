import React, { useEffect, useState } from 'react';
import { guessWordHandler } from '../utils/guessingUtils';
import { handleDeleteLetter } from '../utils/keyboardUtils';
import styles from './Letter.module.css';

function Letter({ letter }) {
    const [classes, setClasses] = useState(styles.letter);

    function addLetterToGuess() {
        console.log('you are guessing ', letter, ' okay bro');
    }

    function getOnclickFunction(e) {
        let onClickFunction;
        switch (letter) {
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

    // useEffect(() => {

    // }, [letter]);
    return (
        <div className={styles.letter} onClick={getOnclickFunction} value={letter}>
            {letter}
        </div>
    )
};

export default Letter;