import layout, { style } from "../../constants/style";
import { useState } from "react";
import ThemeSwitchButton from "./ThemeSwitchButton";
import LanguageOptions from "./LanguageOptions";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslations } from "../../i18n/utils";
import LinkWithIcon from "./LinkWithIcon";

const Navigation = ({ lang }: { lang: "en" | "es" | "bg" }) => {
    const t = useTranslations(lang);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    const [theme, setTheme] = useState("");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            return setTheme(localTheme);
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <div
            id="nav-main"
            className={`${layout.section.dark} sticky top-0 !p-0 z-30 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm shadow-md`}
        >
            <nav className={`${layout.maxWidth} flex items-center justify-between px-4 h-16`}>
                <div className="flex items-center gap-4">
                    <a href={`/${lang}`}>
                        <h3 className={`${style.textPrimary} text-2xl font-semibold leading-[2]`}>
                            Lavacoder
                            <span className="ml-1 inline-block animate-bounce text-4xl text-cyan-500">
                                .
                            </span>
                        </h3>
                    </a>
                </div>
                {/* Desktop devices */}
                <div className="hidden items-center gap-8 lg:flex">
                    <div className="flex items-center gap-2">
                        <ThemeSwitchButton
                            theme={theme}
                            switchTheme={switchTheme}
                            text={theme === "dark" ? t("nav.theme.dark") : t("nav.theme.light")}
                        />
                    </div>
                    {/* <LanguageOptions borderless={true} lang={lang} endpoint="/blog" /> */}
                </div>
                <ul className={`${style.textSecondary}`}>
                    <LinkWithIcon
                        iconName="fa-home"
                        type="anchor-link"
                        path="/"
                        text={t("nav.home")}
                    />
                </ul>
            </nav>
            <motion.div
                className="h-1 bg-cyan-600 rounded"
                style={{ scaleX, transformOrigin: "left" }}
            />
        </div>
    );
};

export default Navigation;
