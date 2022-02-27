export function getPreviousGuessLetters(prevGuesses, rowNumber) {
    return prevGuesses.filter(
        (guess) => guess.guessNumber === rowNumber
    )[0].guess
}

export function getLetterCount(arr, letter) {
    return arr.filter(lettr => lettr === letter).length;
}

export function getTimesLetterIsInCorrectSpotAfterIndex(prevGuess, answerArr, letter, index) {
    const letters = [];
    prevGuess.forEach((lettr, i) => {
        if (lettr === letter && answerArr[i] === lettr && i > index) {
            letters.push(lettr);
        }
    });
    return letters.length;
}