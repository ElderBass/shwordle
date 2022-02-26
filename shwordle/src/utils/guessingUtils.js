export function guessWordHandler() {
    console.log('u sure about that guess bro lolol');
};

export function letterIsInAnswer(letter, answer) {
    return !!answer.includes(letter);
}

export function letterIsInCorrectSpot(guessLetter, answerLetter) {
    return guessLetter === answerLetter;
}

export function compareGuessWithAnswer(guess, answer) {
    console.log('\n ansewr in compareGuessWithAnswer = ', answer, '\n');
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
    console.log('\n comparison results = ', comparisonResults, '\n');
    return comparisonResults;
}

export function isWinningGuess(guess, answer) {
    console.log('\n guess in isWinningGuess ? ', guess, '\n');
    console.log('\n asnwer in isWinningGuess ? ', answer, '\n');
    return guess.filter((guess, i) => guess.value === answer[i]).length === 5;
}