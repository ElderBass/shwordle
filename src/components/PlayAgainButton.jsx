import React from 'react';
import { useGameContext } from '../store/GameState';
import * as GameOverActions from '../store/actions/gameOver';
import styles from './PlayAgainButton.module.css';

function PlayAgainButton() {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useGameContext();

    const onClick = async () => {
        await dispatch(GameOverActions.setPlayAgain());
        const { hostname } = window.location;
        const resetUrl = hostname.includes('localhost') ? '/' : 'https://elderbass.github.io/shwordle/'
        window.location = resetUrl;
    };

    return (
        <button onClick={onClick} className={styles.playAgainBtn}>
            Play Again?
        </button>
    );
}

export default PlayAgainButton;