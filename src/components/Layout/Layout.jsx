// src/components/Layout/Layout.jsx
import React from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";
import StyleSwitcher from "../StyleSwitcher/StyleSwitcher"; // Import StyleSwitcher
import "./Layout.css"; // Add Layout.css if needed

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Aside />
      <MainContent>{children}</MainContent>
      <StyleSwitcher /> {/* Add StyleSwitcher here */}
    </div>
  );
};

export default Layout;
