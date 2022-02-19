import Header from "./components/Header";
import { useState } from "react";
import words from 'an-array-of-english-words';
import GuessBlock from "./components/GuessBlock";
import Keyboard from "./components/Keyboard";

function App() {
  const wordArray = words.filter(word => word.length === 5);
  console.log('\n word array = ', wordArray, '\n');
  
  const [usedWords, setUsedWords] = useState([]);

  return (
    <div className="App">
        <Header />
        <GuessBlock />
        <Keyboard />
    </div>
  );
}

export default App;
