import React from 'react';
import styles from './Keyboard.module.css';
import Letter from './Letter';

function Keyboard() {
    const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'Enter', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'];

    return (
        <div className={styles.keyboardContainer}>
            {letters.map(letter => (
                <Letter letter={letter} />
            ))}
        </div>
    )
}

export default Keyboard;