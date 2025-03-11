import { useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState, useEffect } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";
import { Lightbulb } from "lucide-react";

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

    function handleHintClick() {
        console.log("Hint clicked");
        // Add hint logic here if needed
    }

    return (
        <>
            {word && (
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
                        <Maskedtext text={word} guessedLetters={guessedLetters} />
                    </div>
                </div>


                    {/* Bottom div - Hangman and LetterButtons */}
                    <div className="flex justify-between items-center">
                        {/* Left side - Hangman */}
                        <div className="flex-shrink-0">
                            <HangMan step={step} />
                        </div>
                        {/* Right side - Centered LetterButtons */}
                        <div className="flex flex-wrap justify-center gap-0.5 flex-grow">
                            <LetterButtons 
                                text={word} 
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
