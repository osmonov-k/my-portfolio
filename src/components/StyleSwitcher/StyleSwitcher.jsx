// src/components/StyleSwitcher/StyleSwitcher.jsx
import React, { useState } from "react";
import { useSkin } from "../../hooks/useSkin";
import "./StyleSwitcher.css";

const StyleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { skin, changeSkin } = useSkin();

  const toggleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  const handleSkinChange = (newSkin) => {
    changeSkin(newSkin);
  };

  const handleBodySkinChange = (mode) => {
    changeSkin(mode);
  };

  return (
    <div className={`style-switcher ${isOpen ? "open" : ""}`}>
      <div className="toggle-style-switcher" onClick={toggleSwitcher}>
        <i className="fa fa-cog fa-spin"></i>
      </div>
      <h5>Style Switcher</h5>
      <ul>
        <li>
          <a
            href="#"
            title="pink"
            style={{ backgroundColor: "#ec1839" }}
            onClick={() => handleSkinChange("pink")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            title="blue"
            style={{ backgroundColor: "#2196f3" }}
            onClick={() => handleSkinChange("blue")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            title="orange"
            style={{ backgroundColor: "#fa5b0f" }}
            onClick={() => handleSkinChange("orange")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            title="green"
            style={{ backgroundColor: "#72b626" }}
            onClick={() => handleSkinChange("green")}
          ></a>
        </li>
      </ul>
      <h5>Body Skin</h5>
      <label>
        <input
          type="radio"
          className="body-skin"
          name="body-skin"
          value="light"
          checked={skin === "light"}
          onChange={() => handleBodySkinChange("light")}
        />{" "}
        Light
      </label>
      <label>
        <input
          type="radio"
          className="body-skin"
          name="body-skin"
          value="dark"
          checked={skin === "dark"}
          onChange={() => handleBodySkinChange("dark")}
        />{" "}
        Dark
      </label>
    </div>
  );
};

export default StyleSwitcher;
