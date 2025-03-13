// src/hooks/useSkin.jsx
import { useContext, useEffect } from "react";
import { SkinContext } from "../context/SkinContext";

export const useSkin = () => {
  const { skin, changeSkin } = useContext(SkinContext);

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

    // Apply light/dark mode
    if (skin === "dark") {
      document.body.classList.add("dark");
    } else if (skin === "light") {
      document.body.classList.remove("dark");
    } else {
      // If a skin is selected, ensure dark mode is not applied
      document.body.classList.remove("dark");
    }
  }, [skin]);

  return { skin, changeSkin };
};
