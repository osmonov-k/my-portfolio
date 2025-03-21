import React from "react";

const ProjectCard = ({ item, isImageLeft }) => {
  return (
    <div
      className={`portfolio-item padd-15 ${
        isImageLeft ? "image-left" : "image-right"
      }`}
    >
      <div className="portfolio-item-inner shadow-dark">
        {/* Left Side: Image */}
        <div className="portfolio-image-container">
          <a
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-image-link"
          >
            <div className="portfolio-img">
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <div className="icon">
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Right Side: Content */}
        <div className="portfolio-content">
          <h4>{item.title}</h4>
          <p className="portfolio-description">{item.description}</p>
          <div className="portfolio-tools">
            {item.tools &&
              item.tools.map((tool, index) => (
                <span key={index} className="tool">
                  {tool}
                </span>
              ))}
          </div>
          <div className="portfolio-buttons">
            <a
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button"
            >
              Live Demo
            </a>
            <a
              href={item.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
