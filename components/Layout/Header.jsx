import Logo from './Logo';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });

  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className="shadow-md dark:border-gray-700">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        <Logo />

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
