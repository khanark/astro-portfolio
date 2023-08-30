import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import layout, { style } from '../constants/style';
import { pageContent } from '../constants/constants';
import { useState } from 'react';
import ThemeSwitchButton from './ThemeSwitchButton';
import LinkWithIcon from './LinkWithIcon';
import LanguageOptions from './LanguageOptions';
import useTheme from '../hooks/UseTheme';
import Separator from './Separator';

const Navigation = (): JSX.Element => {
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const { theme } = useTheme();

  const toggleDropDownMenu = () => {
    setDropDownMenu((prev) => !prev);
  };

  return (
    <nav
      className={`${layout.maxWidth} relative z-30 flex items-center justify-between px-4 h-16`}
    >
      <h3 className={`${style.textPrimary} text-2xl font-semibold leading-[2]`}>
        Lavacoder
        <span className="ml-1 inline-block animate-bounce text-4xl text-cyan-500">
          .
        </span>
      </h3>
      {/* Desktop devices */}
      <div className="hidden items-center gap-8 lg:flex">
        <div className="flex items-center gap-2">
          <span className={`${style.textSecondary} text-sm`}>
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
          <ThemeSwitchButton />
        </div>
        <LanguageOptions borderless={true} />
      </div>
      <ul
        className={`${style.textSecondary} hidden w-[350px] justify-between lg:flex`}
      >
        {pageContent.navLinks.map((link, index) => (
          <LinkWithIcon key={index} {...link} />
        ))}
      </ul>
      {/* Mobile */}
      <button
        onClick={toggleDropDownMenu}
        className={`${
          style.textSecondary
        } cursor-pointer text-3xl z-10 transition duration-300 lg:hidden
        ${
          theme === 'dark'
            ? pageContent.themeSwitchIcons.light
            : pageContent.themeSwitchIcons.dark
        }`}
      >
        <FontAwesomeIcon icon={pageContent.dropDownMenu} />
      </button>
      {dropDownMenu && (
        <div className="lg:hidden h-full fixed bottom-0 left-0 bg-gray-100/90 dark:bg-gray-950/90 w-full flex justify-center items-center flex-col gap-4 text-full backdrop-blur-sm">
          <ul
            className={`${style.textSecondary} flex flex-col justify-between`}
          >
            {pageContent.navLinks.map((link, index) => (
              <LinkWithIcon key={index} {...link} />
            ))}
          </ul>
          <Separator />
          <div className="flex items-center justify-between gap-4">
            <ThemeSwitchButton />
            <LanguageOptions />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
