// src/components/Home/Home.jsx
import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Home.css";

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: [
        "I'm a Web Developer",
        "I Love Html5",
        "I Love CSS3",
        "I Love Jquery",
        "I Love Laravel",
      ],
      loop: true,
    });
  }, []);

  return (
    <section className="home section active" id="home">
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
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
