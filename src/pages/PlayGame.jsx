import { useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState, useEffect } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";
import { Lightbulb } from "lucide-react";

function PlayGame() {
    const { state } = useLocation();
    const { word, setWord } = useContext(WordContext);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [hint, setHint] = useState(null); // State to store hint

    useEffect(() => {
        if (state?.wordSelected) {
            setWord({ value: state.wordSelected, hint: state.wordHint });
        }
    }, [state, setWord]);

    function handleLetterClick(letter) {
        if (word?.value.toUpperCase().includes(letter)) {
            console.log("Correct");
        } else {
            console.log("Wrong");
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    function handleHintClick() {
        if (word?.hint) {
            setHint(word.hint);
        }
    }

    return (
        <>
            {word?.value && (
                <div className="flex flex-col gap-y-6">
                    {/* Top div - Hint button and MaskedText */}
                    <div className="flex justify items-center gap-x-20">
                        {/* Left side - Hint button */}
                        <button 
                            onClick={handleHintClick} 
                            className="flex items-center gap-2 bg-orange-400 text-white px-4 py-2 rounded-full border-2 border-orange-400"
                        >
                            <Lightbulb size={20} />
                            Hint
                        </button>

                        {/* Right side - MaskedText */}
                        <div className="pl-80">
                            <Maskedtext text={word.value} guessedLetters={guessedLetters} />
                        </div>
                    </div>

                    {/* Hint display */}
                    {hint && (
                        <div className="text-center text-black font-medium">
                            💡 Hint: {hint}
                        </div>
                    )}

                    {/* Bottom div - Hangman and LetterButtons */}
                    <div className="flex justify-between items-center">
                        {/* Left side - Hangman */}
                        <div className="flex-shrink-0">
                            <HangMan step={step} />
                        </div>

                        {/* Right side - Centered LetterButtons */}
                        <div className="flex flex-wrap justify-center gap-0.5 flex-grow">
                            <LetterButtons 
                                text={word.value} 
                                guessedLetters={guessedLetters} 
                                onLetterClick={handleLetterClick} 
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PlayGame;
