import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { style } from "../constants/style";
import { pageContent } from "../constants/constants";
import useTheme from "../hooks/UseTheme";

const ThemeSwitchButton = (): JSX.Element => {
  const { theme, switchTheme } = useTheme();

  return (
    <button
      onClick={switchTheme}
      className={`${style.textSecondary} cursor-pointer text-2xl transition duration-300 hover:scale-125`}
    >
      <FontAwesomeIcon
        icon={
          theme === "dark"
            ? pageContent.themeSwitchIcons.light
            : pageContent.themeSwitchIcons.dark
        }
      />
    </button>
  );
};

export default ThemeSwitchButton;
