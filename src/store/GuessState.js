import React, { createContext, useContext, useReducer } from 'react';
import guessReducer, { INITIAL_GUESS_STATE } from './reducers/guesses';

const GuessContext = createContext();
const { Provider } = GuessContext;

const GuessProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(guessReducer, INITIAL_GUESS_STATE);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useGuessContext = () => {
    return useContext(GuessContext);
};

export { GuessProvider, useGuessContext };