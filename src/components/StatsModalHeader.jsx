import React from 'react';
import ModalCloseIcon from './ModalCloseIcon';
import styles from './StatsModalHeader.module.css';

function StatsModalHeader({ message }) {
    return (
        <div className={styles.statsModalHeader}>
            <h4 className={styles.headerText}>
                SHWORDLE!
            </h4>
            <ModalCloseIcon className={styles.closeIcon} />
        </div>
    );
}

export default StatsModalHeader;