import * as GuessActions from '../actions/guesses';
import { letters } from '../../consts';
import updateLettersArray from '../../utils/updateLettersArray';

export const INITIAL_GUESS_STATE = {
    guessNumber: 1,
    currentGuess: [],
    guessedLetters: [],
    letters,
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
            const updatedGuessedLetters = [...state.guessedLetters, ...state.currentGuess];
            const updatedLetters = updateLettersArray(state.letters, payload);
            console.log('\n updated letters in guessReducer = ', updatedLetters, '\n');
            const newState = {
                guessNumber: state.guessNumber + 1,
                guessedLetters: updatedGuessedLetters,
                currentGuess: [],
                letters: updatedLetters,
            }
            console.log('\n state after guess word action = ', newState, '\n');
            return newState;
        default: return state;
    }
};

export default guessReducer;