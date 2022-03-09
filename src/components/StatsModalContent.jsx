import React, { useEffect, useState } from 'react';
import { STATS_STORAGE_KEY } from '../consts';
import styles from './StatsModalContent.module.css';

function StatsModalContent({ answerWord }) {
    const [stats, setStats] = useState({});

    useEffect(() => {
        const playerStats = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
        setStats(playerStats);
    }, []);

    return (
        <div className={styles.statsModalContent}>
            <h4>
                The answer was <span className={styles.answerWord}>{answerWord}</span>
            </h4>
            <h5>
                Current Streak: <span className={styles.stat}>{stats.currentStreak}</span>{' | '}
                Max Streak: <span className={styles.stat}>{stats.maxStreak}</span>
                <br/>
                Games Played: <span className={styles.stat}>{stats.gamesPlayed}</span>{' | '}
                Games Won: <span className={styles.stat}>{stats.gamesWon}</span>
                <br/>
                Win Percentage: <span className={styles.stat}>{stats.winPercentage}%</span>
            </h5>
        </div>
    );
}

export default StatsModalContent;
