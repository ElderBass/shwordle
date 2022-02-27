import * as GuessActions from '../actions/guesses';
import { letters } from '../../consts/letters';
import updateLettersArray from '../../utils/updateLettersArray';

export const INITIAL_GUESS_STATE = {
    guessNumber: 1,
    currentGuess: [],
    previousGuesses: [],
    guessedLetters: [],
    letters,
    isGameOver: false,
    isWinningGame: false,
};

const guessReducer = (state = INITIAL_GUESS_STATE, { type, payload }) => {
    switch (type) {
        case GuessActions.ADD_LETTER:
            return {
                ...state,
                currentGuess: payload,
            };
        case GuessActions.DELETE_LETTER:
            return {
                ...state,
                currentGuess: payload,
            };
        case GuessActions.GUESS_WORD:
            const guessObj = { guessNumber: state.guessNumber, guess: state.currentGuess };
            const newState = {
                ...state,
                guessNumber: state.guessNumber + 1,
                guessedLetters: [...state.guessedLetters, ...state.currentGuess],
                previousGuesses: [...state.previousGuesses, guessObj],
                currentGuess: [],
                letters: updateLettersArray(state.letters, payload),
            }
            console.log('\n state after guess word action = ', newState, '\n');
            return newState;
        case GuessActions.END_GAME:
            return {
                ...state,
                letters: updateLettersArray(state.letters, payload.comparisonResults),
                isGameOver: true,
                isWinningGame: payload.isWin,
            };
        default: return state;
    }
};

export default guessReducer;