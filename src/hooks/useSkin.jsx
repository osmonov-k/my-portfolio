import { useContext, useEffect, useState } from "react";
import { SkinContext } from "../context/SkinContext";

export const useSkin = () => {
  const { skin, changeSkin } = useContext(SkinContext);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // Remove any existing skin styles to avoid duplicates
    const existingSkinStyles = document.querySelectorAll("link[data-skin]");
    existingSkinStyles.forEach((style) => style.remove());

    // Determine the correct path based on the environment (development or production)
    const isDev = import.meta.env.MODE === "development";
    const skinPath = isDev ? `/public/skins/${skin}.css` : `/skins/${skin}.css`;

    // Only apply the skin if it's not 'light' or 'dark'
    if (skin !== "light" && skin !== "dark") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = skinPath;
      link.setAttribute("data-skin", "true");
      document.head.appendChild(link);
    }

    // Apply dark mode class to the body based on the state
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [skin, isDarkMode]);

  const toggleDarkMode = (mode) => {
    // Toggle dark mode state and update localStorage
    const darkModeEnabled = mode === "dark";
    setIsDarkMode(darkModeEnabled);
    localStorage.setItem("darkMode", darkModeEnabled.toString());

    // Apply or remove the dark mode class on the body
    document.body.classList.toggle("dark", darkModeEnabled);
  };

  return { skin, changeSkin, isDarkMode, toggleDarkMode };
};
