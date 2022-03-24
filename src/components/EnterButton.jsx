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
  const { currentGuess, guessNumber, previousGuesses, lauraMode } = state;

  function checkForLauraMode(guessWord) {
    if (guessNumber === 2 && guessWord === 'TREBE') {
      if (previousGuesses[0].guess.join('') === 'LAURA') {
        dispatch(LauraActions.setLauraMode(true));
        return true;
      }
    }
}

  async function guessWordHandler() {
    const currentGuessWord = currentGuess.join('');
    if (checkForLauraMode(currentGuessWord)) {
      return;
    }
    if (currentGuess.length < 5 || !wordPool.includes(currentGuessWord)) return;

    const comparisonResults = compareGuessWithAnswer(currentGuess, answerWord);
    const isWin = isWinningGuess(comparisonResults, answerWord);

    if (isWin || guessNumber === 6) {
      setPlayerStats({ isWin, numberOfGuesses: guessNumber, answerWord });
      await dispatch(GuessActions.endGame({ isWin, comparisonResults }));

      const endMessage = getEndGameAlertMessage(guessNumber, isWin, lauraMode);
      await dispatch(ModalActions.setEndGameMessage(endMessage));
      await dispatch(ModalActions.setEndGameGuessNumber(guessNumber));
      await dispatch(ModalActions.toggleShowStatsModal(true));
    } else {
      await dispatch(GuessActions.guessWord(comparisonResults));
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