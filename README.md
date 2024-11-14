# React Theme Switcher

A lightweight React component to easily toggle between light and dark themes in your React application.

## Features

- Easy to integrate into your React app.
- Supports theme switching between **light** and **dark** modes.
- Lightweight and simple to use.
- Provides a `ThemeProvider` to wrap your application and a `useTheme` hook to access the current theme.
- Customizable with CSS classes for light and dark modes.

## Installation

To install the package, run the following command:

```bash
npm install react-theme-switcher-siddharth7477


Here's an updated README for your react-theme-switcher-siddharth7477 package:

markdown
Copy code
# React Theme Switcher

A lightweight React component to easily toggle between light and dark themes in your React application.

## Features

- Easy to integrate into your React app.
- Supports theme switching between **light** and **dark** modes.
- Lightweight and simple to use.
- Provides a `ThemeProvider` to wrap your application and a `useTheme` hook to access the current theme.
- Customizable with CSS classes for light and dark modes.

## Installation

To install the package, run the following command:

```bash
npm install react-theme-switcher-siddharth7477
Usage
1. Wrap your App with the ThemeProvider
In your main entry file (e.g., index.js or main.jsx), wrap your app with the ThemeProvider to provide theme context throughout your application:

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-theme-switcher-siddharth7477';  // Import ThemeProvider
import App from './App';  // Import your main component

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


2. Use the useTheme Hook to Access the Current Theme
Inside your components, use the useTheme hook to access the current theme and toggle between light and dark modes:


import React from 'react';
import { useTheme } from 'react-theme-switcher-siddharth7477';  // Import the useTheme hook

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');  // Toggle between light and dark themes
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton;


3. Apply Styles for Different Themes
Use CSS to apply different styles for light and dark modes:


/* styles.css or App.css */

/* Light Mode */
.light-mode {
  background-color: white;
  color: black;
}

/* Dark Mode */
.dark-mode {
  background-color: black;
  color: white;
}


4. Using the Theme Toggle Button
You can now include the ThemeToggleButton component to allow users to toggle between light and dark themes.

import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';  // Import the button to toggle themes

const App = () => {
  return (
    <div>
      <h1>Hello, Theme Switcher!</h1>
      <ThemeToggleButton />
    </div>
  );
};

export default App;

Props
theme (string): The current theme ('light' or 'dark').
setTheme (function): A function to update the current theme.
License
MIT License

Contributing
If you would like to contribute, feel free to fork the repository and create a pull request with your changes.

Author
Siddharth7477

