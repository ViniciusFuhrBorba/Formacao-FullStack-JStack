import React, { useState, createContext } from "react";

export const ThemeContext = createContext('dark');

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function hangleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark'
        ? 'ligth'
        : 'dark'
    ))
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: hangleToggleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}