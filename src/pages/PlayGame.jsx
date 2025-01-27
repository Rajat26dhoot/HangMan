import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState, useEffect } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";

function PlayGame() {
    const { state } = useLocation(); // Retrieve state passed via navigation
    const { word, setWord } = useContext(WordContext); // Destructure setWord from context
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (state?.wordSelected) {
            // If wordSelected is passed via state, override context word
            setWord(state.wordSelected);
        }
    }, [state, setWord]);

    function handleLetterClick(letter) {
        if (word?.toUpperCase().includes(letter)) {
            console.log("Correct");
        } else {
            console.log("Wrong");
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <>
            <h1>Play Game</h1>
            {word && (
                <>
                    <Maskedtext text={word} guessedLetters={guessedLetters} />
                    <div>
                        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                    </div>
                    <div>
                        <HangMan step={step} />
                    </div>
                </>
            )}
            <Link to="/">Home</Link>
            <Link to="/start" className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;
