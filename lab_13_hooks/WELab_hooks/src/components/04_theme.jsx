import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeDisplay() {
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <div style={themeStyles}>
      <h2>Current Theme: {theme}</h2>
      <p>This component is using the {theme} theme.</p>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <button type="button" onClick={toggleTheme} style={themeStyles}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
}

function Theme() {
  const [theme, setTheme] = useState("light");

  const themes = {
    light: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
      padding: "15px",
      margin: "10px",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      padding: "15px",
      margin: "10px",
    },
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, themeStyles: themes[theme] }}
    >
      <ThemeDisplay />
      <ThemeToggle />
    </ThemeContext.Provider>
  );
}

export default Theme
