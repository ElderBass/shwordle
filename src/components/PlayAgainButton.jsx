import React from 'react';
import { useGameContext } from '../store/GameState';
import * as GameOverActions from '../store/actions/gameOver';
import styles from './PlayAgainButton.module.css';

function PlayAgainButton() {
    const [state, dispatch] = useGameContext();

    const onClick = async () => {
        await dispatch(GameOverActions.setPlayAgain());
        window.location = '/';
    };

    return (
        <button onClick={onClick} className={styles.playAgainBtn}>
            Play Again?
        </button>
    );
}

export default PlayAgainButton;