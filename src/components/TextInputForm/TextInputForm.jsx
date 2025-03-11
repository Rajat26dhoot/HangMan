import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ 
    inputType, 
    handleFormSubmit, 
    handleTextInputChange, 
    handleShowHideClick,
    value,
    hint, // New prop for hint
    handleHintChange // New prop for hint change handler
}) {
    return (
        <form onSubmit={handleFormSubmit}>
            {/* Existing Word Input */}
            <div className="mb-4">
            <TextInput 
                type={inputType}
                label={<span className="text-black">Enter a word or a phrase</span>}
                placeholder="Enter a word or phrase here ..."
                value={value}
                onChangeHandler={handleTextInputChange}
                
            />
        </div>

        {/* New Hint Input */}
        <div className="mb-6">
            <TextInput 
                type="text"
                label={<span className="text-black">Enter a hint</span>}
                placeholder="Enter a hint here ..."
                value={hint}
                onChangeHandler={handleHintChange}
                
            />
        </div>



            {/* Existing Show/Hide Button */}
            <div className="flex gap-4 mt-4">
                {/* Show Button */}
                <button
                    type="button"
                    onClick={handleShowHideClick}
                    className="flex items-center gap-2 px-6 py-2 rounded-xl bg-purple-500 text-white font-medium shadow-md border border-purple-400 hover:bg-purple-600 transition-transform transform hover:scale-105"
                >
                    {inputType === "password" ? "Show" : "Hide"}
                </button>
                
                {/* Submit Button */}
                <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 rounded-xl bg-purple-500 text-white font-medium shadow-md border border-purple-400 hover:bg-purple-600 transition-transform transform hover:scale-105"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default TextInputForm;
