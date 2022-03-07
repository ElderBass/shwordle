import React, { useEffect, useState } from 'react';
import { useGameContext } from '../store/GameState';
import Overlay from './Overlay';
import StatsModalHeader from './StatsModalHeader';
import StatsModalContent from './StatsModalContent';
import styles from './StatsModal.module.css';

function StatsModal() {
    const [state] = useGameContext();
    const { showStatsModal, endGameMessage } = state;

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (showStatsModal){
            setShow(true);
        } else {
            setShow(false);
        }
    }, [showStatsModal])
    return (
        <>
            {show ? (
                <Overlay>
                    <div className={styles.statsModal}>
                        <StatsModalHeader />
                        <StatsModalContent message={endGameMessage} />
                    </div>
                </Overlay>
            ): null}
        </>
    );
}

export default StatsModal;
