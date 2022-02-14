import React from 'react';
import GuessBlock from './GuessBlock';
import styles from './GuessRow.module.css';

function GuessRow(props) {
    const { letters } = props;
    return (
        <div className={styles.guessRow}>
            {letters.map}
            <GuessBlock guessLetter={letters} />
        </div>
    )
}

export default GuessRow;