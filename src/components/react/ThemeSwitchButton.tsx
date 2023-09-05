import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { style } from '../../constants/style';
import { pageContent } from '../../constants/constants';

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
            className={`${style.textSecondary} cursor-pointer text-2xl transition duration-300 hover:scale-125`}
        >
            <FontAwesomeIcon
                icon={
                    theme === 'dark'
                        ? pageContent.themeSwitchIcons.light
                        : pageContent.themeSwitchIcons.dark
                }
            />
        </button>
    );
};

export default ThemeSwitchButton;
