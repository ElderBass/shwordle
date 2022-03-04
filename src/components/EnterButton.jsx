import React, { useEffect, useState } from 'react';
import { useGuessContext } from '../store/GuessState';
import * as GuessActions from '../store/actions/guesses';
import { LOSING_GAME_MESSAGE } from '../consts';
import { compareGuessWithAnswer, isWinningGuess } from '../utils/guessingUtils';
import { getEndGameAlertMessage, setPlayerStats } from '../utils/gameOverUtils';
import styles from './EnterButton.module.css';

function EnterButton({ answerWord, wordPool }) {
  const [state, dispatch] = useGuessContext();
  const { currentGuess, guessNumber } = state;

  const [disabledState, setDisabledState] = useState(true);

  useEffect(() => {
    if (currentGuess.length === 5) {
      setDisabledState(false);
    }
  }, [currentGuess]);

  function guessWordHandler() {
    const currentGuessWord = currentGuess.join('');
    if (currentGuess.length < 5 || !wordPool.includes(currentGuessWord)) return;

    const comparisonResults = compareGuessWithAnswer(currentGuess, answerWord);
    dispatch(GuessActions.guessWord(comparisonResults));
    const isWin = isWinningGuess(comparisonResults, answerWord);

    if (isWin || guessNumber === 6) {
      dispatch(GuessActions.endGame({ isWin, comparisonResults }));
      setPlayerStats({ isWin, numberOfGuesses: guessNumber, answerWord });

      // TODO: Turn this into a modal that gets dispatch on SHOW_STATS action ?
      const endMessage = isWin ? getEndGameAlertMessage(guessNumber, answerWord) : LOSING_GAME_MESSAGE;
      alert(endMessage);
    }
    console.log('\n updated state after guessing word = ', state, '\n');
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