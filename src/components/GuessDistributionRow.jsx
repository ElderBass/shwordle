import React, { useEffect, useState } from 'react';
import { useGameContext } from '../store/GameState';

function GuessDistributionRow({ styles, guessNumber, guess, width }) {
    const [state] = useGameContext();
    const { playerStats: { previousGuessNumber } } = state;
    const [guessBarClasses, setGuessBarClasses] = useState(styles.guessBar);

    useEffect(() => {
        if (previousGuessNumber === guessNumber) {
            setGuessBarClasses(guessBarClasses + ` ${styles.green}`);
        } else {
            setGuessBarClasses(guessBarClasses + ` ${styles.default}`);
        }
    }, [previousGuessNumber, guessNumber])


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
