import { useState } from "react";

const LanguageToggler = ({ currentLanguage, toggleLanguage }) => {

  return (
    <div className="flex">
      <button
        className={`px-2 py-1 ${
          currentLanguage === "fr" ? "border-b border-gray-500" : ""
        }`}
        onClick={() => toggleLanguage("fr")}
      >
        Fr
      </button>
      <span className="px-1 py-1">|</span>
      <button
        className={`px-2 py-1 ${
          currentLanguage === "en" ? "border-b border-gray-500" : ""
        }`}
        onClick={() => toggleLanguage("en")}
      >
        En
      </button>
    </div>
  );
};

export default LanguageToggler;
