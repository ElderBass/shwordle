import React from 'react';
import styles from './NotInWordList.module.css';

function NotInWordList({ word }) {
    return (
        <div className={styles.notInWordContainer}>
            <h2 className={styles.notInWordMessage}>
                <span className={styles.erroneousWord}>{word}</span> is not a word, bro, get a
                dictionary.
            </h2>
        </div>
    );
}

export default NotInWordList;
