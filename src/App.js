import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import wordListJson from 'word-list-json';
import randomWords from 'random-words';
import * as StatsActions from './store/actions/stats';
import * as LauraActions from './store/actions/laura';
import * as GuessActions from './store/actions/guesses';
import * as ModalActions from './store/actions/modal';
import { useGameContext } from './store/GameState';
import { STATS_STORAGE_KEY } from './consts';
import { getPressedKey } from './utils/getPressedKey';
import { compareGuessWithAnswer, isWinningGuess } from './utils/guessingUtils';
import { getEndGameAlertMessage, setPlayerStats } from './utils/gameOverUtils';
import GuessBlock from './components/GuessBoard';
import Keyboard from './components/Keyboard';
import StatsModal from './components/StatsModal';
import LauraModal from './components/LauraModal';

function App() {
    const appRef = useRef(null);

    const [state, dispatch] = useGameContext();
    const {
        showStatsModal,
        showLauraModal,
        notInWordList,
        previousGuesses,
        currentGuess,
        guessNumber,
        lauraMode,
        isGameOver,
    } = state;

    const [solution, setSolution] = useState(null);
    const [wordPool, setWordPool] = useState([]);
    const [showStats, setShowStats] = useState(showStatsModal);

    function generateAnswerWord(previousAnswers) {
        const randomWordsArr = randomWords({ maxLength: 5, exactly: 500 }).filter(
            (word) => word.length === 5
        );
        let result;
        let answerWord =
            randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)].toUpperCase();
        if (previousAnswers.includes(answerWord)) {
            answerWord =
                randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)].toUpperCase();
            while (previousAnswers.includes(answerWord)) {
                answerWord = randomWords[Math.floor(Math.random() * randomWords.length)];
                if (!previousAnswers.includes(answerWord)) {
                    result = answerWord;
                    break;
                }
            }
        } else {
            result = answerWord;
        }
        return result;
    }

    useEffect(() => {
        if (appRef.current) {
            appRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const isLauraMode = localStorage.getItem('lauraMode') && localStorage.getItem('lauraMode');
        if (isLauraMode && isLauraMode === 'true') {
            dispatch(LauraActions.setLauraMode(true));
        }
        if (!localStorage.getItem(STATS_STORAGE_KEY)) {
            localStorage.setItem(
                STATS_STORAGE_KEY,
                JSON.stringify({
                    currentStreak: 0,
                    maxStreak: 0,
                    guesses: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, fail: 0 },
                    gamesPlayed: 0,
                    gamesWon: 0,
                    winPercentage: 0,
                    previousAnswers: [],
                })
            );
        }
        const playerStats = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
        dispatch(StatsActions.setPlayerStats(playerStats));

        const { previousAnswers } = playerStats;
        const wordList = wordListJson
            .filter((word) => word.length === 5 && !previousAnswers.includes(word))
            .map((word) => word.toUpperCase());
        setWordPool(wordList);

        if (!solution) {
            const answerWord = generateAnswerWord(previousAnswers);
            setSolution(answerWord);
        }
    }, [dispatch, solution]);

    // useEffect(() => {
    //     console.log('\n solution = ', solution, '\n');
    // }, [solution]);

    useEffect(() => {
        if (showStatsModal) {
            setShowStats(true);
        } else {
            setShowStats(false);
        }
    }, [showStatsModal]);

    function addLetterToGuess(guessedLetter) {
        if (isGameOver || currentGuess.length === 5) return;

        const guess = currentGuess;
        guess.push(guessedLetter);
        dispatch(GuessActions.addLetter(guess));
    }

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
        if (currentGuess.length < 5) return;

        if (!wordPool.includes(currentGuessWord)) {
            dispatch(GuessActions.notInWordList(true));
            return;
        }

        const comparisonResults = compareGuessWithAnswer(currentGuess, solution);
        const isWin = isWinningGuess(comparisonResults, solution);

        if (isWin || guessNumber === 6) {
            setPlayerStats({ isWin, numberOfGuesses: guessNumber, answerWord: solution });
            await dispatch(GuessActions.endGame({ isWin, comparisonResults }));

            const endMessage = getEndGameAlertMessage(guessNumber, isWin, lauraMode);
            await dispatch(ModalActions.setEndGameMessage(endMessage));
            await dispatch(ModalActions.setEndGameGuessNumber(guessNumber));
            await dispatch(ModalActions.toggleShowStatsModal(true));
        } else {
            await dispatch(GuessActions.guessWord(comparisonResults));
        }
    }

    function handleDeleteLetter() {
        if (currentGuess.length === 0) return;
        if (currentGuess.length === 5 && notInWordList) {
          dispatch(GuessActions.notInWordList(false));
        }
        const updatedGuess = currentGuess;
        updatedGuess.pop();
        dispatch(GuessActions.deleteLetter(updatedGuess));
      }

    const onKeyDown = (e) => {
        const keyPressPayload = getPressedKey(e.code);
        if (keyPressPayload.isEnterKey) {
            guessWordHandler();
        } else if (keyPressPayload.isDeleteKey) {
            handleDeleteLetter();
        }
        else if (keyPressPayload.isLetter) {
            addLetterToGuess(keyPressPayload.letter);
        }
    };

    return (
        <div ref={appRef} tabIndex="0" onKeyDown={onKeyDown} className="App">
            {showLauraModal && <LauraModal />}
            {showStats && <StatsModal answerWord={solution} />}
            <Header />
            <div className="game">
                <GuessBlock
                    answerWord={solution}
                    guessWord={currentGuess.join('')}
                    notInWordList={notInWordList}
                />
                <Keyboard
                    onGuessWord={guessWordHandler}
                    answerWord={solution}
                    onLetterClick={addLetterToGuess}
                    onDelete={handleDeleteLetter}
                />
            </div>
        </div>
    );
}

export default App;
