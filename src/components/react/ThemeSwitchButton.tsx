import { useState, useEffect } from "react";
import { style } from "../../constants/style";

const ThemeSwitchButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setIsMounted(false);
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={handleClick}
            className={`${style.textSecondary} flex gap-2 items-center cursor-pointer`}
        >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            <span className={`${style.textSecondary} text-sm`}>
                {theme === "dark" && isMounted ? "Dark" : "Light"}
            </span>
        </button>
    );
};

export default ThemeSwitchButton;
