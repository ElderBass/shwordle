import React from 'react';
import { useGameContext } from '../store/GameState';
import * as GuessActions from '../store/actions/guesses';
import styles from './DeleteButton.module.css';

function DeleteButton() {
  const [state, dispatch] = useGameContext();
  const { currentGuess, notInWordList } = state;

  function handleDeleteLetter() {
    if (currentGuess.length === 0) return;
    if (currentGuess.length === 5 && notInWordList) {
      dispatch(GuessActions.notInWordList(false));
    }
    const updatedGuess = currentGuess;
    updatedGuess.pop();
    dispatch(GuessActions.deleteLetter(updatedGuess));
  }

  return (
    <div className={styles.deleteBtn} onClick={handleDeleteLetter}>
      Delete
    </div>
  );
}

export default DeleteButton;