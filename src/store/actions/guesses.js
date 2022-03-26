const ADD_LETTER = 'ADD_LETTER';
const addLetter = (updatedLetters) => ({
    type: ADD_LETTER,
    payload: updatedLetters,
});

const DELETE_LETTER = 'DELETE_LETTER';
const deleteLetter = (updatedLetters) => ({
    type: DELETE_LETTER,
    payload: updatedLetters,
});

const GUESS_WORD = 'GUESS_WORD';
const guessWord = (comparisonResults) => ({
    type: GUESS_WORD,
    payload: comparisonResults,
});

const NOT_IN_WORD_LIST = 'NOT_IN_WORD_LIST';
const notInWordList = (payload) => ({
    type: NOT_IN_WORD_LIST,
    payload,
});

const END_GAME = 'END_GAME';
const endGame = (letters) => ({
    type: END_GAME,
    payload: letters,
});

export {
    ADD_LETTER,
    addLetter,
    DELETE_LETTER,
    deleteLetter,
    GUESS_WORD,
    guessWord,
    NOT_IN_WORD_LIST,
    notInWordList,
    END_GAME,
    endGame,
};
