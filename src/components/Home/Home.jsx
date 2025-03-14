// src/components/Home/Home.jsx
import React, { useEffect, useRef, useContext } from "react";
import { init } from "ityped";
import "./Home.css";
import { AsideContext } from "../../context/AsideContext";

const Home = () => {
  const { isAsideOpen } = useContext(AsideContext);

  const textRef = useRef();
  console.log(isAsideOpen);

  useEffect(() => {
    init(textRef.current, {
      strings: [
        "Hi, I'm Kanat! 👋",
        "Crafting pixel-perfect UIs 🎨",
        "Building with React & JavaScript ⚛️",
        "Passionate about clean code ✨",
        "Designing for humans, not screens 🖥️",
        "Making the web accessible ♿",
        "Turning ideas into reality 💡",
        "Creating seamless user experiences 🚀",
        "Styling with CSS magic 🪄",
        "Solving problems with code 🛠️",
        "Bringing designs to life 🌟",
      ],
      loop: true,
    });
  }, []);

  return (
    <section
      className={`home section active ${isAsideOpen ? "aside-open" : ""}`}
      id="home"
    >
      <div className="container">
        <div className="intro">
          <img
            src="/src/assets/images/about.jpeg"
            alt="profile"
            className="shadow-dark"
          />
          <h1>Kanat Osmonov</h1>
          <span className="iTyped" ref={textRef}></span>
          <div className="social-links">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kanat-osmon-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
