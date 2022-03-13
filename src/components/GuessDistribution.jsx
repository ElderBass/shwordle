import React, { useEffect, useState } from 'react';
import GuessDistributionRow from './GuessDistributionRow';
import styles from './GuessDistribution.module.css';

function GuessDistribution({ guesses }) {
    const [widths, setWidths] = useState({});

    useEffect(() => {
        if (guesses) {
            const totalGuessNumber =
                guesses[1] + guesses[2] + guesses[3] + guesses[4] + guesses[5] + guesses[6];
            const guessWidths = {
                one: ((guesses[1] / totalGuessNumber) * 100).toFixed(2),
                two: ((guesses[2] / totalGuessNumber) * 100).toFixed(2),
                three: ((guesses[3] / totalGuessNumber) * 100).toFixed(2),
                four: ((guesses[4] / totalGuessNumber) * 100).toFixed(2),
                five: ((guesses[5] / totalGuessNumber) * 100).toFixed(2),
                six: ((guesses[6] / totalGuessNumber) * 100).toFixed(2),
            };
            setWidths(guessWidths);
        }
    }, [guesses]);

    return (
        <>
            {widths.one && (
                <div className={styles.guessDistribution}>
                    <div className={styles.guessDistributionText}>
                        <h4>Guess Distribution</h4>
                    </div>
                    <GuessDistributionRow
                        guessNumber={1}
                        guess={guesses[1]}
                        styles={styles}
                        width={`${widths.one}%`}
                    />
                    <GuessDistributionRow
                        guessNumber={2}
                        guess={guesses[2]}
                        styles={styles}
                        width={`${widths.two}%`}
                    />
                    <GuessDistributionRow
                        guessNumber={3}
                        guess={guesses[3]}
                        styles={styles}
                        width={`${widths.three}%`}
                    />
                    <GuessDistributionRow
                        guessNumber={4}
                        guess={guesses[4]}
                        styles={styles}
                        width={`${widths.four}%`}
                    />
                    <GuessDistributionRow
                        guessNumber={5}
                        guess={guesses[5]}
                        styles={styles}
                        width={`${widths.five}%`}
                    />
                    <GuessDistributionRow
                        guessNumber={6}
                        guess={guesses[6]}
                        styles={styles}
                        width={`${widths.six}%`}
                    />
                </div>
            )}
        </>
    );
}

export default GuessDistribution;
