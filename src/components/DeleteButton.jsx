import React from 'react';
import { useGuessContext } from '../store/GuessState';
import * as GuessActions from '../store/actions/guesses';
import styles from './DeleteButton.module.css';

function DeleteButton() {
  const [state, dispatch] = useGuessContext();
  const { currentGuess } = state;

  function handleDeleteLetter() {
    if (currentGuess.length === 0) return;
    const updatedGuess = currentGuess;
    updatedGuess.pop();
    dispatch(GuessActions.deleteLetter(updatedGuess));
    console.log('\n updated state after deleting letter = ', state, '\n');
  }

  return (
    <div className={styles.deleteBtn} onClick={handleDeleteLetter}>
      Delete
    </div>
  );
}

export default DeleteButton;