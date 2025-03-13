// src/components/SectionTitle/SectionTitle.jsx
import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title padd-15">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
