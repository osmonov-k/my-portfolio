import React, { createContext, useState } from "react";

export const AsideContext = createContext();

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
