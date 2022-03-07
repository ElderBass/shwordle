import React, { useEffect, useState } from 'react';
import { STATS_STORAGE_KEY } from '../consts';
import styles from './StatsModalContent.module.css';

function StatsModalContent({ message }) {
    const [stats, setStats] = useState({});

    useEffect(() => {
        const playerStats = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
        setStats(playerStats);
    }, []);

    return (
        <div className={styles.statsModalContent}>
            <h4>{message}</h4>
            <h5>{`Win Percentage: ${stats.winPercentage}%`}</h5>
        </div>
    );
}

export default StatsModalContent;