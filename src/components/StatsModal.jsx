import React from 'react';
import { useGameContext } from '../store/GameState';
import * as ModalActions from '../store/actions/modal';
import StatsModalHeader from './StatsModalHeader';
import StatsModalContent from './StatsModalContent';
import styles from './StatsModal.module.css';
import PlayAgainButton from './PlayAgainButton';

function StatsModal({ answerWord }) {
    const [state, dispatch] = useGameContext();
    const { endGameMessage, isGameOver, showStatsModal } = state;

    const closeModalHandler = () => dispatch(ModalActions.toggleShowStatsModal(!showStatsModal));

    return (
        <div onClick={closeModalHandler} className={styles.overlay}>
            <div className={styles.statsModal}>
                <StatsModalHeader onClick={closeModalHandler} />
                <StatsModalContent answerWord={answerWord} message={endGameMessage} />
                {isGameOver && <PlayAgainButton />}
            </div>
        </div>
    );
}

export default StatsModal;
