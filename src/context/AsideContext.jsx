// src/context/AsideContext.js
import React, { createContext, useState } from "react";

// Create the context
export const AsideContext = createContext();

// Create the provider component
export const AsideProvider = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <AsideContext.Provider value={{ isAsideOpen, toggleAside }}>
      {children}
    </AsideContext.Provider>
  );
};
