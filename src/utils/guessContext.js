import React from "react";

const defaultValue = {
    guessNumber: 1,
    guessedLetters: [],
};

const GuessContext = React.createContext(defaultValue);

export default GuessContext;