import React from 'react';
import * as LauraActions from '../store/actions/laura';
import { useGameContext } from '../store/GameState';
import styles from './LauraLogo.module.css';

function LauraLogo() {
    const [state, dispatch] = useGameContext();
    const { showLauraModal } = state;

    const onClick = () => {
        dispatch(LauraActions.setShowLauraModal(!showLauraModal));
    };

    return (
        <div className={styles.lauraLogo} onClick={onClick}>
            Well hello, Laura
        </div>
    );
}

export default LauraLogo;