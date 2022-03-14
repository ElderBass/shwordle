import React from 'react';
import { useGameContext } from '../store/GameState';
import * as ModalActions from '../store/actions/modal';
import ModalCloseIcon from './ModalCloseIcon';
import styles from './StatsModalHeader.module.css';

function StatsModalHeader() {
    const [state, dispatch] = useGameContext();
    const { showStatsModal } = state;
    const onClick = () => dispatch(ModalActions.toggleShowStatsModal(!showStatsModal));
    
    return (
        <div className={styles.statsModalHeader}>
            <h4 className={styles.headerText}>
                SHWORDLE!
            </h4>
            <ModalCloseIcon className={styles.closeIcon} onClick={onClick} />
        </div>
    );
}

export default StatsModalHeader;