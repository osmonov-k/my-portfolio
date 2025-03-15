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

    // Correct path based on environment
    const isDev = import.meta.env.MODE === "development";
    const skinPath = isDev
      ? `/public/skins/${skin}.css`
      : `/assets/skins/${skin}.css`; // Make sure skins are in public_html/assets/skins/

    if (skin !== "light" && skin !== "dark") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = skinPath;
      link.setAttribute("data-skin", "true");
      document.head.appendChild(link);
    }

    // Handle dark mode separately
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

    document.body.classList.toggle("dark", darkModeEnabled);
  };

  return { skin, changeSkin, isDarkMode, toggleDarkMode };
};
