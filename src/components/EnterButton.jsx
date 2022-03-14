import React from 'react';
import { useGameContext } from '../store/GameState';
import * as GuessActions from '../store/actions/guesses';
import * as ModalActions from '../store/actions/modal';
import { compareGuessWithAnswer, isWinningGuess } from '../utils/guessingUtils';
import { getEndGameAlertMessage, setPlayerStats } from '../utils/gameOverUtils';
import * as LauraActions from '../store/actions/laura';
import styles from './EnterButton.module.css';

function EnterButton({ answerWord, wordPool }) {
  const [state, dispatch] = useGameContext();
  const { currentGuess, guessNumber } = state;

  function checkForLauraMode(guessWord) {
    if (guessNumber === 1 && guessWord === 'LAURA') {
        dispatch(LauraActions.setLauraMode(true));
        return true;
    }
}

  async function guessWordHandler() {
    const currentGuessWord = currentGuess.join('');
    if (checkForLauraMode(currentGuessWord)) {
      return;
    }
    if (currentGuess.length < 5 || !wordPool.includes(currentGuessWord)) return;

    const comparisonResults = compareGuessWithAnswer(currentGuess, answerWord);
    await dispatch(GuessActions.guessWord(comparisonResults));
    const isWin = isWinningGuess(comparisonResults, answerWord);

    if (isWin || guessNumber === 6) {
      await dispatch(GuessActions.endGame({ isWin, comparisonResults }));
      setPlayerStats({ isWin, numberOfGuesses: guessNumber, answerWord });

      const endMessage = getEndGameAlertMessage(guessNumber, answerWord, isWin);
      await dispatch(ModalActions.setEndGameMessage(endMessage));
      await dispatch(ModalActions.toggleShowStatsModal(true));
    }
  }

  return (
    <div
      className={styles.enterBtn}
      onClick={guessWordHandler}>
      Enter
    </div>
  );
}

export default EnterButton;