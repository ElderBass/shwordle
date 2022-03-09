import React, { createContext, useContext, useReducer } from 'react';
import gameReducer, { INITIAL_GAME_STATE } from './reducers/game';

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_GAME_STATE);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useGameContext = () => {
    return useContext(GameContext);
};

export { GameProvider, useGameContext };