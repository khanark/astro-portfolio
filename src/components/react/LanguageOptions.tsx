import { useState } from "react";
import { style } from "../../constants/style";

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

  return (
    <div className="relative">
      <button
        className={`${style.textSecondary} ${
          !borderless ? "rounded-md border border-gray-300" : ""
        } cursor-pointer bg-transparent px-2 py-1 outline-none`}
        onClick={showOptions}
      >
        {currentLanguage}
      </button>
      {showLanguageOptions && (
        <ul
          className={`${style.textSecondary} absolute top-full p-2 border-2 border-gray-600 rounded-lg`}
        >
          {languages.map((lang) => {
            return (
              <button key={lang.code} className="dark:hover:bg-gray-600">
                {lang.name}
              </button>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageOptions;
