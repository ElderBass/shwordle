
function updateLettersArray(lettersArr, guessArr) {
    const updatedArray = lettersArr.map(letter => {
        const updatedLetter = {
            value: letter.value,
            isInWord: letter.isInWord,
            inCorrectSpot: letter.inCorrectSpot,
        };
        for (let i = 0; i < guessArr.length; i++) {
            if (guessArr[i].value === letter.value) {
                updatedLetter.isInWord = guessArr[i].isInWord;
                updatedLetter.inCorrectSpot = guessArr[i].inCorrectSpot;
            }
        }
        return updatedLetter;
    });
    return updatedArray;
}

export default updateLettersArray;