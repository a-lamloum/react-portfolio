import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const getInitialTheme = () => {
  // Check if there's a manually set theme in localStorage
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme;
  }

  // If no stored theme, determine based on time
  const currentHour = new Date().getHours();
  return (currentHour >= 18 || currentHour < 6) ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isAutoTheme, setIsAutoTheme] = useState(() => !localStorage.getItem('theme'));

  useEffect(() => {
    // Update body class when theme changes
    document.body.className = theme === 'dark' ? '' : 'light-theme';
    
    // Only save to localStorage if manual change (not auto)
    if (!isAutoTheme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, isAutoTheme]);

  // Auto theme update based on time
  useEffect(() => {
    if (!isAutoTheme) return; // Skip if manual theme is set

    const updateThemeByTime = () => {
      const currentHour = new Date().getHours();
      const newTheme = (currentHour >= 18 || currentHour < 6) ? 'dark' : 'light';
      setTheme(newTheme);
    };

    // Update theme initially
    updateThemeByTime();

    // Set up interval to check time every hour
    const interval = setInterval(updateThemeByTime, 3600000); // 1 hour in milliseconds

    return () => clearInterval(interval);
  }, [isAutoTheme]);

  const toggleTheme = () => {
    setIsAutoTheme(false); // Disable auto theme when manually toggled
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme,
      isAutoTheme,
      setIsAutoTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
