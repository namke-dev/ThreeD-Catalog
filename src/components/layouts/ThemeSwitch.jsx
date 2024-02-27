import { FaMoon, FaSun } from "react-icons/fa";
import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/theme-context";

export default function ThemeSwitch() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      if (localTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className={`rounded-full p-2
      fixed top-3 right-3 md:top-7 md:right-7
      z-50
      border border-gray-300 dark:border-gray-700
      bg-gray-100
      dark:bg-gray-600
      opacity-80
      `}
      onClick={toggleDarkMode}
    >
      {darkMode && (
        <FaMoon
          className={`h-4 w-4 md:h-6 md:w-6 
          fill-yellow-300`}
        />
      )}{" "}
      {!darkMode && (
        <FaSun
          className={`h-4 w-4 md:h-7 md:w-7 
          fill-yellow-300`}
        />
      )}
    </button>
  );
}
