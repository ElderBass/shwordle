import { STATS_STORAGE_KEY } from '../consts';

export function setPlayerStats(stats) {
const playerStats = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
    console.log('\n player stats right away in setPlayerStats? = ', playerStats, '\n');
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
    const winPercentage = gamesWon / gamesPlayed;

    const updatedStats = {
        gamesPlayed,
        gamesWon,
        winPercentage,
        currentStreak,
        maxStreak,
        guesses,
        previousAnswers,
    };

    console.log('\n updatedStats after manipulation in setPlayerStats = ', updatedStats, '\n');
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(updatedStats));
}

export function getEndGameAlertMessage(guessNumber) {
    let message = 'SHWORDLE!\n';
    switch (guessNumber) {
        case 1:
            message = 'Hacker, reporting.';
            break;
        case 2:
            message = "Git gud, homie";
            break;
        case 3:
            message = 'Git gud, homie';
            break;
        case 4:
            message = 'Git gud, homie';
            break;
        case 5:
            message = 'Sweaty one. Git gud, homie';
            break;
        case 6:
            message = 'You made ME sweat, holy.';
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