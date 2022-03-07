import * as GuessActions from '../actions/guesses';
import * as ModalActions from '../actions/modal';
import { letters } from '../../consts/letters';
import updateLettersArray from '../../utils/updateLettersArray';

export const INITIAL_GAME_STATE = {
    guessNumber: 1,
    currentGuess: [],
    previousGuesses: [],
    guessedLetters: [],
    letters,
    isGameOver: false,
    isWinningGame: false,
    showStatsModal: false,
    endGameMessage: '',
};

const gameReducer = (state = INITIAL_GAME_STATE, { type, payload }) => {
    let newState;
    switch (type) {
        case GuessActions.ADD_LETTER:
            newState = {
                ...state,
                currentGuess: payload,
            };
            break;
        case GuessActions.DELETE_LETTER:
            newState = {
                ...state,
                currentGuess: payload,
            };
            break;
        case GuessActions.GUESS_WORD:
            const guessObj = { guessNumber: state.guessNumber, guess: state.currentGuess };
            newState = {
                ...state,
                guessNumber: state.guessNumber === 6 ? 6 : state.guessNumber + 1,
                guessedLetters: [...state.guessedLetters, ...state.currentGuess],
                previousGuesses: [...state.previousGuesses, guessObj],
                currentGuess: [],
                letters: updateLettersArray(state.letters, payload),
            }
            break;
        case GuessActions.END_GAME:
            newState = {
                ...state,
                letters: updateLettersArray(state.letters, payload.comparisonResults),
                isGameOver: true,
                isWinningGame: payload.isWin,
            }
            break;
        case ModalActions.TOGGLE_SHOW_STATS_MODAL:
            newState = {
                ...state,
                showStatsModal: payload,
            }
            break;
        case ModalActions.SET_END_GAME_MESSAGE:
            newState = {
                ...state,
                endGameMessage: payload,
            }
            break;
        default: newState = state;
    }
    console.log(`\n updated state after ${type} action = `, newState, '\n');
    return newState;
};

export default gameReducer;