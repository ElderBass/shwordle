export function getClassNames(styles, letter) {
    const { isInWord, inCorrectSpot } = letter;
    let classNames = styles.letter || styles.guessSquare;
    if (isInWord) {
        if (inCorrectSpot) {
            classNames += ` ${styles.inCorrectSpot}`;
        } else {
            classNames += ` ${styles.isInWord}`;
        }
    } else {
        classNames += ` ${styles.notInWord}`;
    }
    return classNames;
}