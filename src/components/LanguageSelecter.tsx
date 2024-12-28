import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelecter: React.FC = () => {
  const { i18n } = useTranslation();
   const { t } = useTranslation('navbar');

  // Set the language and save it in localStorage
  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("preferredLanguage", lang); // Save language preference
  };

  // On component mount, set the language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <li className="relative group">
      <button className="text-gray-800 hover:text-red-600">
      {t('main8')}
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-50 z-10">
        <p
          onClick={() => changeLanguage("en")}
          className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
        >
          English
        </p>
        <p
          onClick={() => changeLanguage("fr")}
          className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
        >
          French
        </p>
        {/* <p
          onClick={() => changeLanguage("es")}
          className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
        >
          Spanish
        </p>
        <p
          onClick={() => changeLanguage("de")}
          className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
        >
          German
        </p> */}
      </div>
    </li>
  );
};

export default LanguageSelecter;
