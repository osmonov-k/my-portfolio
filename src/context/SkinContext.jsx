// src/context/SkinContext.jsx
import React, { createContext, useState } from "react";

export const SkinContext = createContext();

export const SkinProvider = ({ children }) => {
  const [skin, setSkin] = useState("pink");

  const changeSkin = (newSkin) => {
    setSkin(newSkin);
  };

  return (
    <SkinContext.Provider value={{ skin, changeSkin }}>
      {children}
    </SkinContext.Provider>
  );
};
