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
    END_GAME,
    endGame,
};
