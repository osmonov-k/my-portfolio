// src/components/Portfolio/Portfolio.jsx
import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { AsideContext } from "../../context/AsideContext";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const { isAsideOpen } = useContext(AsideContext);

  const portfolioItems = [
    {
      id: 1,
      category: "web-design",
      image: "/images/portfolio/1.jpg",
      title: "Web Design",
    },
    {
      id: 2,
      category: "photography",
      image: "/images/portfolio/2.jpg",
      title: "Photography",
    },
    {
      id: 3,
      category: "wordpress",
      image: "/images/portfolio/3.jpg",
      title: "Wordpress",
    },
    {
      id: 4,
      category: "web-design",
      image: "/images/portfolio/4.jpg",
      title: "Web Design",
    },
    {
      id: 5,
      category: "wordpress",
      image: "/images/portfolio/5.jpg",
      title: "Wordpress",
    },
    {
      id: 6,
      category: "photography",
      image: "/images/portfolio/6.jpg",
      title: "Photography",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section
      className={`portfolio section active ${isAsideOpen ? "aside-open" : ""}`}
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-filter padd-15">
            <button
              type="button"
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              type="button"
              className={filter === "web-design" ? "active" : ""}
              onClick={() => setFilter("web-design")}
            >
              Web
            </button>
            <button
              type="button"
              className={filter === "photography" ? "active" : ""}
              onClick={() => setFilter("photography")}
            >
              Games
            </button>
            <button
              type="button"
              className={filter === "wordpress" ? "active" : ""}
              onClick={() => setFilter("wordpress")}
            >
              Data & AI
            </button>
          </div>
        </div>
        <div className="row">
          {filteredItems.map((item) => (
            <div
              className="portfolio-item padd-15"
              key={item.id}
              data-category={item.category}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
