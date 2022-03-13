import React from 'react';

function GuessDistributionRow({ styles, guessNumber, guess, width }) {
    return (
        <div className={styles.guessBarWrapper}>
            <div className={styles.guessNumber}>{guessNumber}:</div>
            <div className={styles.guessBar} style={{ width }}>
                {guess}
            </div>
        </div>
    );
}

export default GuessDistributionRow;
