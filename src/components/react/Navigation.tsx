import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import layout, { style } from "../../constants/style";
import { pageContent } from "../../constants/constants";
import { useState } from "react";
import ThemeSwitchButton from "./ThemeSwitchButton";
import LinkWithIcon from "./LinkWithIcon";
import LanguageOptions from "./LanguageOptions";
import { useTranslations } from "../../i18n/utils";

const Navigation = ({ lang }: { lang: "en" | "es" | "bg" }) => {
    const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
    const t = useTranslations(lang);

    const toggleDropDownMenu = () => {
        setDropDownMenu((prev) => !prev);
    };

    return (
        <div
            id="nav-main"
            className={`${layout.section.dark} sticky top-0 !p-0 z-30  bg-opacity-90 dark:bg-opacity-90  backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm drop-shadow-2xl`}
        >
            <nav className={`${layout.maxWidth} flex items-center justify-between px-4 h-16`}>
                <div className="flex items-center gap-4">
                    <a href="/">
                        <h3 className={`${style.textPrimary} text-2xl font-semibold leading-[2]`}>
                            Lavacoder
                            <span className="ml-1 inline-block animate-bounce text-4xl text-cyan-500">
                                .
                            </span>
                        </h3>
                    </a>
                    <a
                        href={`/blog`}
                        className="text-cyan-900 dark:text-cyan-600 font-bold font-FiraCode tracking-wider text-sm underline underline-offset-4"
                    >
                        Blog
                    </a>
                </div>
                {/* Desktop devices */}
                <div className="hidden items-center gap-8 lg:flex">
                    <div className="flex items-center gap-2">
                        <ThemeSwitchButton />
                    </div>
                    <LanguageOptions borderless={true} lang={lang} />
                </div>
                <ul className={`${style.textSecondary} hidden w-[400px] justify-between lg:flex`}>
                    {pageContent.navLinks.map((link, index) => (
                        <LinkWithIcon key={index} {...link} text={t(`nav.${link.text}` as any)} />
                    ))}
                </ul>
                {/* Mobile */}
                <button
                    onClick={toggleDropDownMenu}
                    className={`${style.textSecondary} cursor-pointer text-3xl z-10 transition duration-300 lg:hidden
                }`}
                >
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
                {dropDownMenu && (
                    <div className="lg:hidden absolute h-screen top-0 left-0 bg-gray-100/90 dark:bg-gray-950/90 w-full flex justify-center items-center flex-col gap-4 text-full backdrop-blur-sm">
                        <ul className={`${style.textSecondary} flex flex-col justify-between`}>
                            {pageContent.navLinks.map((link, index) => (
                                <li key={index}>
                                    <LinkWithIcon
                                        {...link}
                                        text={t(`nav.${link.text}` as any)}
                                        toggleDropDownMenu={toggleDropDownMenu}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-700" />
                        <div className="flex relative items-center justify-between gap-4">
                            <ThemeSwitchButton />
                            <LanguageOptions lang={lang} />
                        </div>
                    </div>
                )}
            </nav>
            <div className="h-1 bg-cyan-600 rounded" />
        </div>
    );
};

export default Navigation;
