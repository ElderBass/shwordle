import { STATS_STORAGE_KEY } from '../consts';

export function setPlayerStats(stats) {
    const playerStats = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
    const { isWin, numberOfGuesses, answerWord } = stats;
    let { currentStreak, guesses, maxStreak, gamesPlayed, gamesWon, previousAnswers } = playerStats;
    previousAnswers.push(answerWord);
    if (isWin) {
        guesses = getUpdatedGuessPayload(guesses, numberOfGuesses);
        gamesWon++;
        currentStreak++
    }
    if (currentStreak > maxStreak) {
        maxStreak++;
    }
    gamesPlayed++;
    const winPercentage = (gamesWon / gamesPlayed * 100).toFixed(1);

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

export function getEndGameAlertMessage(guessNumber, isWin) {
    let message = isWin ? `You win...this time...<br>`
                        : 'YOU LOSE \n lol sucks to suck bro git gud';
    if (!isWin) return;
    switch (guessNumber) {
        case 1:
            message += 'Hacker, reporting.';
            break;
        case 2:
            message += 'Do not confuse blatant luck with "skill".';
            break;
        case 3:
            message += '3 guesses wow am I supposed to be impressed?';
            break;
        case 4:
            message += '4 guesses. eh. I\'ll venture 1 guess that this took you far too long.';
            break;
        case 5:
            message += 'Your confidence must be shaken after 5 guesses, which it probably should be.';
            break;
        case 6:
            message += 'You made ME sweat jeez. Wipe yourself off and git gud, bro';
            break;
        default:
            break;
    }
    return message;
}

function getUpdatedGuessPayload(guesses, numberOfGuesses) {
    const newValue = guesses[numberOfGuesses] + 1;
    guesses[numberOfGuesses] = newValue;
    return guesses;
}