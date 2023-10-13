import { style } from "../../constants/style";

const ThemeSwitchButton = ({
    theme,
    switchTheme,
    text,
}: {
    theme: string;
    switchTheme: any;
    text: string;
}) => {
    return (
        <button
            onClick={switchTheme}
            className={`${style.textSecondary} flex gap-2 items-center cursor-pointer`}
        >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            <span className={`${style.textSecondary} text-sm`}>{text}</span>
        </button>
    );
};

export default ThemeSwitchButton;
