const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function LetterButtons({ text, guessedLetters, onLetterClick }) {

    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter) {
        if(guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return 'bg-blue-500';
        }
    }

    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    }

    const buttons = ALPHABETS.map(letter => {
        return (
            <button
            key={`button-${letter}`}
            value={letter}
            onClick={handleLetterClick}
            disabled={guessedLettersSet.has(letter)}
            className={`size-12 m-1 text-white text-2xl font-bold rounded-full ${buttonStyle(letter)}`}
        >
            {letter}
        </button>
        
        );
    });

    return (
        <>
            { buttons }
        </>
    )

}

export default LetterButtons;