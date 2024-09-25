// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from local storage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    document.body.classList.toggle('dark-theme', savedTheme);
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-theme', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
