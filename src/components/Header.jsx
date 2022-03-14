import React from 'react';
import { useGameContext } from '../store/GameState';
import styles from './Header.module.css';
import LauraLogo from './LauraLogo';
import StatsHeaderToggle from './StatsHeaderToggle';

function Header() {
    const [state] = useGameContext();
    const { lauraMode } = state;
    return (
        <div className={styles.headerContainer}>
            {lauraMode && <LauraLogo />}
            <h2 className={styles.shwordleLogo}>SHWORDLE</h2>
            <StatsHeaderToggle />
        </div>
    )
}

export default Header;
