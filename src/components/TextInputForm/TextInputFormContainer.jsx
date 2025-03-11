import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");
    const [hint, setHint] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        if (value) {
            navigate(`/play`, { state: { wordSelected: value, hint: hint } });
        }
    }

    function handleTextInputChange(event) {
        const inputValue = event.target.value;

        if (/^[a-zA-Z]*$/.test(inputValue) || inputValue === "") {
            if (inputValue.length <= 26) {
                setValue(inputValue);
            }
        } else {
            // ❌ Show custom alert popup
            setAlertMessage("Only alphabetic characters (A-Z) are allowed");
            setTimeout(() => setAlertMessage(""), 3000);
        }
    }

    function handleHintChange(event) {
        setHint(event.target.value);
    }

    function handleShowHideClick() {
        setInputType((prev) => (prev === "password" ? "text" : "password"));
    }

    return (
        <>
            <div className="border border-purple-300 rounded-lg p-6 shadow-md" style={{
                            backgroundColor: 'rgba(245, 246, 246, 0.5)', // Same background as navbar
                        }}> {/* ✅ Added border and padding */}
            {alertMessage && (
                <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md animate-fadeInOut z-50">
                    {alertMessage}
                </div>
            )}

            <TextInputForm 
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                value={value}
                handleShowHideClick={handleShowHideClick}
                hint={hint}
                handleHintChange={handleHintChange}
            />
        </div>
        </>
    );
}

export default TextInputFormContainer;
