import React from 'react';
import { BsSun, BsMoon, BsClock } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isAutoTheme, setIsAutoTheme } = useTheme();

  const handleDoubleClick = () => {
    setIsAutoTheme(prev => !prev);
    // Clear localStorage when switching to auto theme
    if (!isAutoTheme) {
      localStorage.removeItem('theme');
    }
  };

  return (
    <button
      className={`theme-toggle ${isAutoTheme ? 'auto-theme' : ''}`}
      onClick={toggleTheme}
      onDoubleClick={handleDoubleClick}
      aria-label={`${isAutoTheme ? 'Auto theme enabled' : `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}`}
      title={isAutoTheme ? 'Double-click to disable auto theme' : 'Double-click to enable auto theme'}
    >
      {isAutoTheme ? (
        <BsClock />
      ) : (
        theme === 'dark' ? <BsSun /> : <BsMoon />
      )}
    </button>
  );
};

export default ThemeToggle;
