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