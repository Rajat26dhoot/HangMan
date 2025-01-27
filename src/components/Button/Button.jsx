import getButtonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = "primary", type = "button" }) {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`px-6 py-3 ${getButtonStyling(styleType)} text-white font-bold transition duration-200 ease-in-out shadow-md`}
    >
      {text}
    </button>
  );
}

export default Button;
