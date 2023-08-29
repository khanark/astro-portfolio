import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface UseThemeReturn {
  theme: Theme;
  switchTheme: () => void;
}

function useTheme(): UseThemeReturn {
  const [theme, setTheme] = useState<Theme>(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDarkMode ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchTheme = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return { theme, switchTheme };
}

export default useTheme;
