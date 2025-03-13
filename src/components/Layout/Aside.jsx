// src/components/Layout/Aside.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`aside ${isOpen ? "open" : ""}`}>
        <div className="aside-inner">
          <div className="logo">
            <NavLink to="/">Kanat</NavLink>
          </div>
          <ul className="nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="fa fa-home"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="fa fa-user"></i> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="fa fa-briefcase"></i> Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="fa fa-envelope"></i> Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="fa fa-comments"></i> Contact
              </NavLink>
            </li>
          </ul>
          <div className="copyright-text">
            &copy; 2020 The WebShala Template
          </div>
        </div>
      </div>
      <div
        className={`nav-toggler ${isOpen ? "open" : ""}`}
        onClick={toggleAside}
      >
        <span></span>
      </div>
    </>
  );
};

export default Aside;
