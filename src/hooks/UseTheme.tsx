import { useEffect, useState } from 'react';

type Theme = string;

interface UseThemeReturn {
  theme: Theme;
  switchTheme: () => void;
}

function useTheme(): UseThemeReturn {
  const preferedTheme: boolean = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [theme, setTheme] = useState<Theme>((): Theme => {
    const initialTheme: Theme = preferedTheme ? 'dark' : 'light';
    const storedTheme: string | null = localStorage.getItem('theme');
    return storedTheme ? storedTheme : initialTheme;
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
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('theme', theme);
  };

  return { theme, switchTheme };
}

export default useTheme;
