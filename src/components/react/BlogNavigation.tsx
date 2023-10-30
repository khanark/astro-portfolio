import layout, { style } from "../../constants/style";
import { useState } from "react";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { useEffect } from "react";
import { useTranslations } from "../../i18n/utils";
import LinkWithIcon from "./LinkWithIcon";

const Navigation = ({ lang }: { lang: "en" | "es" | "bg" }) => {
    const t = useTranslations(lang);

    return (
        <div
            id="nav-main"
            className={`${layout.section.dark} sticky top-0 !p-0 z-30 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm shadow-md`}
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
                </div>
                {/* Desktop devices */}
                <div className="hidden items-center gap-8 lg:flex">
                    <div className="flex items-center gap-2">
                        <ThemeSwitchButton />
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
            <div className="h-1 bg-cyan-600 rounded" />
        </div>
    );
};

export default Navigation;
