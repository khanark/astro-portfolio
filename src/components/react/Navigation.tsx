import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import layout, { style } from "../../constants/style";
import { pageContent } from "../../constants/constants";
import { useState } from "react";
import ThemeSwitchButton from "./ThemeSwitchButton";
import LinkWithIcon from "./LinkWithIcon";
import LanguageOptions from "./LanguageOptions";
import Separator from "./Separator";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("dark");

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }

    if (localTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDropDownMenu = () => {
    setDropDownMenu((prev) => !prev);
  };

  return (
    <div className={`${layout.section.dark} !p-0 z-30 sticky top-0`}>
      <nav
        className={`${layout.maxWidth} flex items-center justify-between px-4 h-16`}
      >
        <div className="flex items-center gap-4">
          <a href="/" className="">
            <h3
              className={`${style.textPrimary} text-2xl font-semibold leading-[2]`}
            >
              Lavacoder
              <span className="ml-1 inline-block animate-bounce text-4xl text-cyan-500">
                .
              </span>
            </h3>
          </a>
          <a
            href="/blog"
            className="text-cyan-900 dark:text-cyan-600 font-bold font-FiraCode tracking-wider text-sm hover:underline underline-offset-4"
          >
            Blog
          </a>
        </div>
        {/* Desktop devices */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-2">
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
          theme === "dark"
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
      </nav>
    </div>
  );
};

export default Navigation;
