import React, { useEffect, useState } from 'react';
import { useGameContext } from '../store/GameState';

function GuessDistributionRow({ styles, guessNumber, guess, width }) {
    const [state] = useGameContext();
    const { endGameGuessNumber } = state;
    const [guessBarClasses, setGuessBarClasses] = useState(styles.guessBar);

    useEffect(() => {
        const classNames = styles.guessBar;
        if (parseInt(endGameGuessNumber) === guessNumber) {
            setGuessBarClasses(classNames + ` ${styles.green}`);
        } else {
            setGuessBarClasses(classNames + ` ${styles.default}`);
        }
    }, [endGameGuessNumber, guessNumber, styles]);


    return (
        <div className={styles.guessBarWrapper}>
            <div className={styles.guessNumber}>{guessNumber}:</div>
            <div className={guessBarClasses} style={{ width }}>
                {guess}
            </div>
        </div>
    );
}

export default GuessDistributionRow;
