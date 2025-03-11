import { useLocation, useNavigate } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState, useEffect } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";
import { Lightbulb } from "lucide-react";

function PlayGame() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { word, setWord } = useContext(WordContext);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [hint, setHint] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [gameResult, setGameResult] = useState(null);

    useEffect(() => {
        if (state?.wordSelected) {
            setWord({ value: state.wordSelected, hint: state.wordHint });
        }
    }, [state, setWord]);

    // Check for win/loss condition
    useEffect(() => {
        if (step >= 7) {
            setGameOver(true);
            setGameResult("You lost! 😢");
        } else if (word?.value.split('').every((letter) => guessedLetters.includes(letter.toUpperCase()))) {
            setGameOver(true);
            setGameResult("You won! 🎉");
        }
    }, [guessedLetters, step, word]);

    function handleLetterClick(letter) {
        if (gameOver){
            return;
        }

        if (word?.value.toUpperCase().includes(letter)) {
            console.log("Correct");
        } else {
            console.log("Wrong");
            setStep(step + 1);
        }

        setGuessedLetters((prev) => [...prev, letter]);
    }

    function handleHintClick() {
        if (word?.hint) {
            setHint(word.hint);
        }
    }

    // Reset game state and load new word
    function handlePlayAgain() {
        setGuessedLetters([]);
        setStep(0);
        setGameOver(false);
        setGameResult(null);
        setHint(null);

        // Navigate to home or word selection screen to get a new word
        navigate('/'); // Adjust the path based on your routing structure
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

            {/* Pop-up Modal for Win/Loss */}
            {gameOver && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white border-2 border-purple-300 shadow-lg rounded-xl flex flex-col items-center justify-center p-6 w-[350px]">
                        {/* Text */}
                        <h2 className={`text-lg font-bold text-center ${gameResult.includes("won") ? "text-green-500" : "text-red-500"}`}>
                            {gameResult}
                        </h2>
                        {gameResult.includes("lost") && (
                            <p className="text-gray-500 text-center mt-2">
                                The correct word was: <span className="font-bold text-black">{word.value}</span>
                            </p>
                        )}
                    </div>

                    {/* Play Again Button */}
                    <button 
                        onClick={handlePlayAgain}
                        className="flex items-center gap-2 px-6 py-2 rounded-xl bg-purple-500 text-white font-medium shadow-md border border-purple-400 hover:bg-purple-600 transition-transform transform hover:scale-105 absolute bottom-20"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </>
    );
}

export default PlayGame;
