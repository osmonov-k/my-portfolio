import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/global.css";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/**
 * 
 * category 71 headphones earbuds,
 * 253 playstations 
 * 72 Office Electronics
 * 56 Computer Monitors
 * 68 Wearable Technology
 * 81 Computers
 * 80 Security & Surveillance Equipment
 * 57 Computers & Tablets
 * 73	Portable Audio & Video
 * 78 Vehicle Electronics
 * 79	Camera & Photo
 * 65	Laptop Accessories
 * 75	Cell Phones & Accessories
 */