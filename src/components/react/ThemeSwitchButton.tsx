import { style } from "../../constants/style";
import { pageContent } from "../../constants/constants";

const ThemeSwitchButton = ({
  theme,
  switchTheme,
}: {
  theme: string;
  switchTheme: any;
}) => {
  return (
    <button
      onClick={switchTheme}
      className={`${style.textSecondary} flex gap-2 items-center cursor-pointer`}
    >
      <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
      <span className={`${style.textSecondary} text-sm`}>
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
};

export default ThemeSwitchButton;
