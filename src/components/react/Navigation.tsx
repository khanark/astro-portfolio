import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import layout, { style } from '../../constants/style';
import { pageContent } from '../../constants/constants';
import { useState } from 'react';
import ThemeSwitchButton from './ThemeSwitchButton';
import LinkWithIcon from './LinkWithIcon';
import LanguageOptions from './LanguageOptions';
import Separator from './Separator';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme') as any);
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const switchTheme = (): void => {
    const element = document.documentElement;
    element.classList.toggle('dark');

    const isDark = element.classList.contains('dark');

    setTheme(isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const toggleDropDownMenu = () => {
    setDropDownMenu((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${layout.maxWidth} sticky top-0 z-30 flex items-center justify-between px-4 h-16`}
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
          <ThemeSwitchButton theme={theme} switchTheme={switchTheme} />
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
      <AnimatePresence>
        {dropDownMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden h-full fixed bottom-0 left-0 bg-gray-100/90 dark:bg-gray-950/90 w-full flex justify-center items-center flex-col gap-4 text-full backdrop-blur-sm"
          >
            <ul
              className={`${style.textSecondary} flex flex-col justify-between`}
            >
              {pageContent.navLinks.map((link, index) => (
                <LinkWithIcon
                  key={index}
                  {...link}
                  toggleDropDownMenu={toggleDropDownMenu}
                />
              ))}
            </ul>
            <Separator />
            <div className="flex items-center justify-between gap-4">
              <ThemeSwitchButton theme={theme} switchTheme={switchTheme} />
              <LanguageOptions />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
