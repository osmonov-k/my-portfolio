import React, { useState } from "react";
import { useSkin } from "../../hooks/useSkin";
import "./StyleSwitcher.css";

const StyleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { skin, changeSkin, isDarkMode, toggleDarkMode } = useSkin();

  const toggleSwitcher = () => {
    setIsOpen((prev) => !prev);
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
            style={{
              backgroundColor: "#ec1839",
              border: skin === "pink" && "2px solid gray",
            }}
            onClick={() => changeSkin("pink")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            title="blue"
            style={{
              backgroundColor: "#2196f3",
              border: skin === "blue" && "2px solid gray",
            }}
            onClick={() => changeSkin("blue")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            title="orange"
            style={{
              backgroundColor: "#fa5b0f",
              border: skin === "orange" && "2px solid gray",
            }}
            onClick={() => changeSkin("orange")}
          ></a>
        </li>
        <li>
          <a
            href="#"
            title="green"
            style={{
              backgroundColor: "#72b626",
              border: skin === "green" && "2px solid gray",
            }}
            onClick={() => changeSkin("green")}
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
          checked={!isDarkMode}
          onChange={() => toggleDarkMode("light")}
        />{" "}
        Light
      </label>
      <label>
        <input
          type="radio"
          className="body-skin"
          name="body-skin"
          value="dark"
          checked={isDarkMode}
          onChange={() => toggleDarkMode("dark")}
        />{" "}
        Dark
      </label>
    </div>
  );
};

export default StyleSwitcher;
