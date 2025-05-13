import React, { useEffect } from "react";
import { ModeContext } from "../../context/ModeContext";
import { useState } from "react";

export default function ModeProvider({ children }) {
  //   const [darkMode, setDarkMode] = useState(() => {
  //     const saved = localStorage.getItem("theme");
  //     return saved ? saved : "light";
  //   });

  //   useEffect(() => {
  //     console.log(darkMode);

  //     const root = window.document.documentElement;
  //     if (darkMode === "dark") {
  //       root.classList.add("dark");
  //     } else {
  //       root.classList.remove("dark");
  //     }
  //     localStorage.setItem("theme", darkMode);
  //   }, [darkMode]);

  //   const toggleDarkMode = () =>
  //     setDarkMode((prev) => (prev === "light" ? "dark" : "light"));

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    // Synchronise la classe HTML si le thème change
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ModeContext.Provider>
  );
}
