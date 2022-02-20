import Header from "./components/Header";
import { useEffect, useState } from "react";
import words from 'an-array-of-english-words';
import GuessBlock from './components/GuessBlock';
import Keyboard from "./components/Keyboard";
import { GuessProvider } from './store/GuessState';

function App() {
  const wordArray = words.filter(word => word.length === 5).map(word => word.toUpperCase());

  useEffect(() => {
    const answerWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    console.log('\n answer word = ', answerWord, '\n');
    setAnswerWord(answerWord);
  }, []);
  
  const [usedWords, setUsedWords] = useState([]);
  const [answerWord, setAnswerWord] = useState('');

  return (
    <div className="App">
        <Header />
        <GuessProvider>
          <GuessBlock answerWord={answerWord} />
          <Keyboard answerWord={answerWord} />
        </GuessProvider>
    </div>
  );
}

export default App;
