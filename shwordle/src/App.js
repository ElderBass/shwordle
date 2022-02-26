import Header from './components/Header';
import { useEffect, useState } from 'react';
import words from 'an-array-of-english-words';
import GuessBlock from './components/GuessBlock';
import Keyboard from './components/Keyboard';
import { GuessProvider } from './store/GuessState';
import { STATS_STORAGE_KEY } from './consts';


function App() {
  const [answerWord, setAnswerWord] = useState('');

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
    const previousAnswers = JSON.parse(
      localStorage.getItem(STATS_STORAGE_KEY)
    ).previousAnswers;

    const wordArray = words
      .filter((word, i) => word.length === 5 && !previousAnswers.includes(word)) 
      .map((word) => word.toUpperCase());

    const answerWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log('\n answer word = ', answerWord, '\n');
    setAnswerWord(answerWord);
  }, []);

  return (
    <div className='App'>
      <Header />
      <GuessProvider>
        <GuessBlock answerWord={answerWord} />
        <Keyboard answerWord={answerWord} />
      </GuessProvider>
    </div>
  );
}

export default App;
