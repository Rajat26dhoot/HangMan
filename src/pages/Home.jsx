import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { WordContext } from "../context/WordContext";
import { motion } from 'framer-motion';
import './style.css';

function Home() {
    const { setWordList, setWord } = useContext(WordContext);
    
    

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();

        setWordList([...data]);
        

        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedWord = data[randomIndex];
        
        setWord({
            value: selectedWord.wordValue,
            hint: selectedWord.wordHint
        });

    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
            {/* Welcome Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-24 pb-10"
            >
                <h1 className="text-4xl text-gray-800 font-bold">
                    Welcome to Hangman!
                </h1>
            </motion.div>

            {/* Game Modes */}
            <div className="flex gap-4 p-4">
                {/* Single Player - Timed */}
                <Link to="/play" className="w-full">
                    <div 
                        className="flex items-center border border-purple-300 rounded-lg p-4 shadow-md"
                        style={{
                            backgroundColor: 'rgba(245, 246, 246, 0.8)', // Same background as navbar
                        }}
                    >
                        <div className="bg-purple-500 text-black p-3 rounded-full">
                            ⏳
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-black">Single Player</h3>
                            <p className="text-sm text-gray-600">Play by yourself</p>
                        </div>
                    </div>
                </Link>

                {/* Single Player - Untimed */}
                <Link to="/start" className="w-full">
                    <div 
                        className="flex items-center border border-yellow-300 rounded-lg p-4 shadow-md"
                        style={{
                            backgroundColor: 'rgba(245, 246, 246, 0.8)', // Same background as navbar
                        }}
                    >
                        <div className="bg-yellow-400 text-white p-3 rounded-full">
                            👤
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-black">Multi Player</h3>
                            <p className="text-sm text-gray-600">Play with Friends</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Home;
