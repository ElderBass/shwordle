import React from 'react';
import styles from './Header.module.css';
import StatsHeaderToggle from './StatsHeaderToggle';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <h2 className={styles.shwordleLogo}>SHWORDLE</h2>
            <StatsHeaderToggle />
        </div>
    )
}

export default Header;
