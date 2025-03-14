import { useContext, useEffect, useState } from "react";
import { SkinContext } from "../context/SkinContext";

export const useSkin = () => {
  const { skin, changeSkin } = useContext(SkinContext);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // Remove existing skin styles
    const existingSkinStyles = document.querySelectorAll("link[data-skin]");
    existingSkinStyles.forEach((style) => style.remove());

    // Dynamically load the selected skin CSS
    if (skin !== "light" && skin !== "dark") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `/src/assets/styles/skins/${skin}.css`;
      link.setAttribute("data-skin", skin);
      document.head.appendChild(link);
    }

    // Apply dark mode separately from skin selection
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [skin, isDarkMode]);

  const toggleDarkMode = (mode) => {
    const darkModeEnabled = mode === "dark";
    setIsDarkMode(darkModeEnabled);
    localStorage.setItem("darkMode", darkModeEnabled.toString());

    if (darkModeEnabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return { skin, changeSkin, isDarkMode, toggleDarkMode };
};
