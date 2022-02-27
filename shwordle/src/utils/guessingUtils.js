export function letterIsInAnswer(letter, answer) {
    return !!answer.includes(letter);
}

export function letterIsInCorrectSpot(guessLetter, answerLetter) {
    return guessLetter === answerLetter;
}

export function compareGuessWithAnswer(guess, answer) {
    const comparisonResults = [];
    const answerArr = answer.split('');
    for (let i = 0; i < answerArr.length; i++) {
        if (letterIsInAnswer(guess[i], answerArr)) {
            if (letterIsInCorrectSpot(guess[i], answerArr[i])) {
                comparisonResults.push({
                    value: guess[i],
                    isInWord: true,
                    inCorrectSpot: true, 
                });
            } else {
                comparisonResults.push({
                    value: guess[i],
                    isInWord: true,
                    inCorrectSpot: false, 
                })
            }
        } else {
            comparisonResults.push({
                value: guess[i],
                isInWord: false,
                inCorrectSpot: false, 
            })
        }
    }
    return comparisonResults;
}

export function isWinningGuess(guess, answer) {
    return guess.filter((guess, i) => guess.value === answer[i]).length === 5;
}