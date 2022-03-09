import React from 'react';
import { useGameContext } from '../store/GameState';
import StatsModalHeader from './StatsModalHeader';
import StatsModalContent from './StatsModalContent';
import styles from './StatsModal.module.css';

function StatsModal({ answerWord }) {
    const [state] = useGameContext();
    const { endGameMessage } = state;

    return (
        <div className={styles.overlay}>
            <div className={styles.statsModal}>
                <StatsModalHeader />
                <StatsModalContent answerWord={answerWord} message={endGameMessage} />
            </div>
        </div>
    );
}

export default StatsModal;
