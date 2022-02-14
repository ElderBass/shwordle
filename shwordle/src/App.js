import Header from "./components/Header";
import { useState } from "react";
import words from 'an-array-of-english-words';

function App() {
  const wordArray = words.filter(word => word.length === 5);
  console.log('\n word array = ', wordArray, '\n');
  
  const [usedWords, setUsedWords] = useState([]);

  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
