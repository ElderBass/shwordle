import Header from './components/Header';
import { useEffect, useState } from 'react';
import wordListJson from 'word-list-json';
import randomWords from 'random-words';
import GuessBlock from './components/GuessBoard';
import Keyboard from './components/Keyboard';
import * as StatsActions from './store/actions/stats';
import { useGameContext } from './store/GameState';
import { STATS_STORAGE_KEY } from './consts';
import StatsModal from './components/StatsModal';
import LauraModal from './components/LauraModal';

function App() {
    const [state, dispatch] = useGameContext();
    const { showStatsModal, showLauraModal } = state;

    const [answerWord, setAnswerWord] = useState('');
    const [wordPool, setWordPool] = useState([]);
    const [showStats, setShowStats] = useState(showStatsModal);

    function generateAnswerWord(previousAnswers) {
        const randomWordsArr = randomWords({ maxLength: 5, exactly: 200 }).filter(word => word.length === 5);
        let result;
        let answerWord = randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)].toUpperCase();
        if (previousAnswers.includes(answerWord)) {
            answerWord = randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)].toUpperCase();
            while (previousAnswers.includes(answerWord)) {
                answerWord = randomWords[Math.floor(Math.random() * randomWords.length)];
                if (!previousAnswers.includes(answerWord)) {
                    result = answerWord;
                    break;
                }
            };
        } else {
            result = answerWord;
        }
        // console.log('answer word = ', result);
        return result;
    }

    useEffect(() => {
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
        const wordList = wordListJson.filter(word => word.length === 5 && !previousAnswers.includes(word))
            .map((word) => word.toUpperCase());
        setWordPool(wordList);
        const answerWord = generateAnswerWord(previousAnswers);
        setAnswerWord(answerWord);
    }, [dispatch]);

    useEffect(() => {
        if (showStatsModal) {
            setShowStats(true);
        } else {
            setShowStats(false);
        }
    }, [showStatsModal]);

    return (
        <div className="App">
            {showLauraModal && <LauraModal />}
            {showStats && <StatsModal answerWord={answerWord} />}
            <Header />
            <GuessBlock answerWord={answerWord} />
            <Keyboard answerWord={answerWord} wordPool={wordPool} />
        </div>
    );
}

export default App;
