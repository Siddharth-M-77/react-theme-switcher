import "./theme-styles.css";

import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Create a context for the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultTheme = "light" }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTheme: PropTypes.oneOf(["light", "dark"]),
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
