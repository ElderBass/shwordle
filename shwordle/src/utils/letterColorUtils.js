export function getClassNames(styles, letter) {
    const { isInWord, hasBeenGuessed, inCorrectSpot } = letter;
    let classNames = styles.letter;
    if (hasBeenGuessed) {
        if (isInWord) {
            if (inCorrectSpot) {
                classNames += ` ${styles.inCorrectSpot}`;
            } else {
                classNames += ` ${styles.isInWord}`;
            }
        } else {
            classNames += ` ${styles.notInWord}`;
        }
    }
    return classNames;
}