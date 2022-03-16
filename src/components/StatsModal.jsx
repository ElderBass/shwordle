import React from 'react';
import { useGameContext } from '../store/GameState';
import StatsModalHeader from './StatsModalHeader';
import StatsModalContent from './StatsModalContent';
import styles from './StatsModal.module.css';
import PlayAgainButton from './PlayAgainButton';

function StatsModal({ answerWord }) {
    const [state] = useGameContext();
    const { endGameMessage, isGameOver } = state;

    return (
        <div className={styles.overlay}>
            <div className={styles.statsModal}>
                <StatsModalHeader />
                <StatsModalContent answerWord={answerWord} message={endGameMessage} />
                {isGameOver && <PlayAgainButton />}
            </div>
        </div>
    );
}

export default StatsModal;
