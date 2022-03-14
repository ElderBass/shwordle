import React from 'react';
import { useGameContext } from '../store/GameState';
import * as LauraActions from '../store/actions/laura';
import ModalCloseIcon from './ModalCloseIcon';
import styles from './LauraModalHeader.module.css';

function LauraModalHeader() {
    const [state, dispatch] = useGameContext();
    const { showLauraModal } = state;
    const onClick = () => dispatch(LauraActions.setShowLauraModal(!showLauraModal));
    
    return (
        <div className={styles.lauraModalHeader}>
            <h4 className={styles.headerText}>
                Laura Trebe is a <span style={{ color: 'rgb(10, 165, 10)' }}>PROGRAMMER</span>
            </h4>
            <ModalCloseIcon className={styles.closeIcon} onClick={onClick} />
        </div>
    );
}

export default LauraModalHeader;