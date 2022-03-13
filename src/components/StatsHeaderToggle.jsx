import React from 'react';
import { useGameContext } from '../store/GameState';
import * as ModalActions from '../store/actions/modal';
import styles from './StatsHeaderToggle.module.css';

function StatsHeaderToggle() {
    const [state, dispatch] = useGameContext();
    const { showStatsModal } = state;

    const onClick = () => {
        dispatch(ModalActions.toggleShowStatsModal(!showStatsModal));
    };

    return (
        <div
            className={styles.statsHeaderToggle}
            onClick={onClick}
        >
            <img
                className={styles.statsIcon}
                alt='stats-icon'
                src="https://img.icons8.com/fluency/48/000000/rebalance-portfolio.png"
            />
        </div>
    );
}

export default StatsHeaderToggle;