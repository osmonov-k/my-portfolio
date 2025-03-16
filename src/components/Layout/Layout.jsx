import React, { useState } from "react";
import Aside from "./Aside";
import StyleSwitcher from "../StyleSwitcher/StyleSwitcher";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Aside />
      <div className="main-content">{children}</div>
      <StyleSwitcher />
    </div>
  );
};

export default Layout;
