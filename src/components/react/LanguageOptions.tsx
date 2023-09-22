import { useRef, useState } from "react";
import { style } from "../../constants/style";
import { motion } from "framer-motion";

type Props = {
  borderless?: boolean;
  lang: string;
};

const LanguageOptions = ({ borderless, lang }: Props) => {
  const languages: { [key: string]: string } = {
    "/en": "English",
    "/es": "Español",
    "/bg": "Български",
    // Add more languages as needed
  };

  const [showLanguageOptions, setShowLanguageOptions] =
    useState<boolean>(false);

  const showOptions = (): void => {
    setShowLanguageOptions((prev) => !prev);
  };

  const switchLanguages = (lang: string): void => {
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
        <i className="fa-solid fa-globe"></i>
        <span className="inline-block w-16 text-start">
          {languages[`/${lang}`]}
        </span>
      </button>
      {showLanguageOptions && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${style.textPrimary} absolute top-full p-2 border-2 border-gray-600 rounded-lg`}
        >
          {Object.keys(languages).map((lang) => {
            return (
              <a
                href={lang}
                key={lang}
                className="dark:hover:bg-gray-600 w-full text-start px-2 py-1"
                onClick={() => switchLanguages(lang)}
              >
                {languages[lang]}
              </a>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
};

export default LanguageOptions;
