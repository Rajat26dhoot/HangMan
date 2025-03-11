import { getMaskedString } from "./MaskingUtility";

function MaskedText({ text, guessedLetters }) {
    const maskedString = getMaskedString(text, guessedLetters);

    return (
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span key={index} className="mx-1 text-3xl text-black font-bold">
                        {letter}
                    </span>
                )
            })}
        </>
    );
}

export default MaskedText;
