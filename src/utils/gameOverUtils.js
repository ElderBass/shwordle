import { STATS_STORAGE_KEY } from '../consts';
const laura = require('../consts/laura.json');

export function setPlayerStats(stats) {
    const playerStats = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
    const { isWin, numberOfGuesses, answerWord } = stats;
    let { currentStreak, guesses, maxStreak, gamesPlayed, gamesWon, previousAnswers } = playerStats;
    previousAnswers.push(answerWord);
    if (isWin) {
        guesses = getUpdatedGuessPayload(guesses, numberOfGuesses);
        gamesWon++;
        currentStreak++;
    }
    if (currentStreak > maxStreak) {
        maxStreak++;
    }
    gamesPlayed++;
    const winPercentage = ((gamesWon / gamesPlayed) * 100).toFixed(1);

    const updatedStats = {
        gamesPlayed,
        gamesWon,
        winPercentage,
        currentStreak,
        maxStreak,
        guesses,
        previousAnswers,
        previousGuessNumber: numberOfGuesses,
    };

    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(updatedStats));
}

export function getEndGameAlertMessage(guessNumber, isWin, lauraMode = false) {
    console.log('laura = ', laura);
    if (!isWin) return;

    let message = '';
    switch (guessNumber) {
        case 1:
            message += lauraMode ? laura.one : 'Hacker, reporting.';
            break;
        case 2:
            message += lauraMode ? laura.two : 'Do not confuse blatant luck with "skill".';
            break;
        case 3:
            message += lauraMode ? laura.three : '3 guesses wow am I supposed to be impressed?';
            break;
        case 4:
            message += lauraMode
                ? laura.four
                : "4 guesses. eh. I'll venture 1 guess that this took you far too long.";
            break;
        case 5:
            message += lauraMode
                ? laura.five
                : 'Your confidence must be shaken after 5 guesses, which it probably should be.';
            break;
        case 6:
            message += lauraMode
                ? laura.six
                : 'You made ME sweat jeez. Wipe yourself off and git gud, bro';
            break;
        default:
            break;
    }
    console.log('message = ', message);

    return message;
}

function getUpdatedGuessPayload(guesses, numberOfGuesses) {
    const newValue = guesses[numberOfGuesses] + 1;
    guesses[numberOfGuesses] = newValue;
    return guesses;
}
