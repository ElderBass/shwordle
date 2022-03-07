import React from 'react';
import { useGameContext } from '../store/GameState';
import * as GuessActions from '../store/actions/guesses';
import * as ModalActions from '../store/actions/modal';
import { LOSING_GAME_MESSAGE } from '../consts';
import { compareGuessWithAnswer, isWinningGuess } from '../utils/guessingUtils';
import { getEndGameAlertMessage, setPlayerStats } from '../utils/gameOverUtils';
import styles from './EnterButton.module.css';

function EnterButton({ answerWord, wordPool }) {
  const [state, dispatch] = useGameContext();
  const { currentGuess, guessNumber } = state;

  function guessWordHandler() {
    const currentGuessWord = currentGuess.join('');
    if (currentGuess.length < 5 || !wordPool.includes(currentGuessWord)) return;

    const comparisonResults = compareGuessWithAnswer(currentGuess, answerWord);
    dispatch(GuessActions.guessWord(comparisonResults));
    const isWin = isWinningGuess(comparisonResults, answerWord);
    console.log('\n comparisonResults =  ', comparisonResults, '\n');

    if (isWin || guessNumber === 6) {
      console.log('\n are we getting into win check ? ', isWin, '\n');
      dispatch(GuessActions.endGame({ isWin, comparisonResults }));
      setPlayerStats({ isWin, numberOfGuesses: guessNumber, answerWord });

      // TODO: Turn this into a modal that gets dispatch on SHOW_STATS action ?
      const endMessage = isWin ? getEndGameAlertMessage(guessNumber, answerWord) : LOSING_GAME_MESSAGE;
      dispatch(ModalActions.setEndGameMessage(endMessage));
      dispatch(ModalActions.toggleShowStatsModal(true));
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