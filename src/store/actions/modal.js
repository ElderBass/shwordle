const TOGGLE_SHOW_STATS_MODAL = 'TOGGLE_SHOW_STATS_MODAL';
const toggleShowStatsModal = (payload) => ({
    type: TOGGLE_SHOW_STATS_MODAL,
    payload,
});

const SET_END_GAME_MESSAGE = 'SET_END_GAME_MESSAGE'
const setEndGameMessage = (message) => ({
    type: SET_END_GAME_MESSAGE,
    payload: message,
});

const SET_END_GAME_GUESS_NUMBER = 'SET_END_GAME_GUESS_NUMBER'
const setEndGameGuessNumber = (number) => ({
    type: SET_END_GAME_GUESS_NUMBER,
    payload: number,
});

export {
    TOGGLE_SHOW_STATS_MODAL,
    toggleShowStatsModal,
    SET_END_GAME_MESSAGE,
    setEndGameMessage,
    SET_END_GAME_GUESS_NUMBER,
    setEndGameGuessNumber,
};