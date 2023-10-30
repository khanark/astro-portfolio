import { useState } from "react";
import { style } from "../../constants/style";

type Props = {
    borderless?: boolean;
    lang: string;
    endpoint?: string;
};

const LanguageOptions = ({ borderless, lang, endpoint = "/" }: Props) => {
    const languages: { [key: string]: string } = {
        "/en": "English",
        "/es": "Español",
        "/bg": "Български",
        // Add more languages as needed
    };

    const [showLanguageOptions, setShowLanguageOptions] = useState<boolean>(false);

    const showOptions = (): void => {
        setShowLanguageOptions((prev) => !prev);
    };

    return (
        <div className="w-auto">
            <button
                className={`${style.textSecondary} ${
                    !borderless ? "rounded-md border border-gray-300" : ""
                } cursor-pointer bg-transparent px-2 py-1 outline-none text-sm flex items-center gap-2`}
                onClick={showOptions}
            >
                <i className="fa-solid fa-globe"></i>
                <span className="inline-block w-18 text-start">{languages[`/${lang}`]}</span>
            </button>
            {showLanguageOptions && (
                <ul
                    className={`${style.textPrimary} absolute flex flex-col top-full p-2 border-2 border-gray-600 rounded-lg`}
                >
                    {Object.keys(languages).map((lang) => {
                        return (
                            <a
                                href={lang + endpoint}
                                key={lang}
                                className="dark:hover:bg-gray-600 w-full text-start px-2 py-1"
                                onClick={showOptions}
                            >
                                {languages[lang]}
                            </a>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default LanguageOptions;
