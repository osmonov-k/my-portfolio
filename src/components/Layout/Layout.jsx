// src/components/Layout/Layout.jsx
import React, { useState } from "react";
import Aside from "./Aside";
import StyleSwitcher from "../StyleSwitcher/StyleSwitcher"; // Import StyleSwitcher
import "./Layout.css"; // Add Layout.css if needed

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Aside />
      <div className="main-content">{children}</div>
      <StyleSwitcher /> {/* Add StyleSwitcher here */}
    </div>
  );
};

export default Layout;
