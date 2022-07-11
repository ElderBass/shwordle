import { letters } from "../consts/letters";

export const getPressedKey = (letterCode) => {
    if (letterCode === 'Enter') {
        return { isEnterKey: true };
    }

    if (letterCode === 'Backspace') {
        return { isDeleteKey: true };
    }
    const sanitizedLetter = letterCode.slice(3);
    const letter = letters.filter((lett) => lett.value === sanitizedLetter);
    if (letter && letter[0]) {
        return { isLetter: true, letter: sanitizedLetter };
    }
    return {};
};
