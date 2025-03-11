import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { WordContext } from "../context/WordContext";
import './style.css';

function Home() {
    const { setWordList, setWord } = useContext(WordContext);

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();

        setWordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
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
    );
}

export default Home;
