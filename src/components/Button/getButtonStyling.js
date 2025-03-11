const getButtonStyling = (styleType) => {
    switch (styleType) {
      case "primary":
        return "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-lg";
      case "secondary":
        return "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-lg";
      case "danger":
        return "bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 rounded-lg";
      case "success":
        return "bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 rounded-lg";
      default:
        return "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-lg";
    }
  };
  
export default getButtonStyling;
  