import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("opacity-0");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, []);

  return (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
