import { useState } from "react";
import { style } from "../../constants/style";
import { motion } from "framer-motion";

type Props = {
  borderless?: boolean;
};

const LanguageOptions = ({ borderless }: Props) => {
  const [showLanguageOptions, setShowLanguageOptions] =
    useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>("English");

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "bg", name: "Български" },
    // Add more languages as needed
  ];

  const showOptions = (): void => {
    setShowLanguageOptions((prev) => !prev);
  };

  const switchLanguages = (lang: string): void => {
    setCurrentLanguage(lang);
    showOptions();
  };

  return (
    <div className="relative w-auto">
      <button
        className={`${style.textSecondary} ${
          !borderless ? "rounded-md border border-gray-300" : ""
        } cursor-pointer bg-transparent px-2 py-1 outline-none text-sm flex items-center gap-2`}
        onClick={showOptions}
      >
        <i className="fa-solid fa-globe text-lg"></i>
        <span className="inline-block w-16 text-start">{currentLanguage}</span>
      </button>
      {showLanguageOptions && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${style.textPrimary} absolute top-full p-2 border-2 border-gray-600 rounded-lg`}
        >
          {languages.map((lang) => {
            return (
              <button
                key={lang.code}
                className="dark:hover:bg-gray-600 w-full text-start px-2 py-1"
                onClick={() => switchLanguages(lang.name)}
              >
                {lang.name}
              </button>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
};

export default LanguageOptions;
