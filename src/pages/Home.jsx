import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect } from "react";
import { WordContext } from "../context/WordContext";
import './style.css';

function Home() {
    
    const { setWordList, setWord } = useContext(WordContext);

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        setWordList([...data])

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
            <div className="flex justify-between">
            <Link to="/play" className="w-full">
                <Button className="w-full h-12" text="Single Player" />
            </Link>

            <Link to="/start" className="w-full">
                <Button className="w-full h-12" text="Multi Player" styleType="secondary" />
            </Link>
            </div>

        </>
    )
}

export default Home;