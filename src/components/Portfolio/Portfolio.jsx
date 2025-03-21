import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { AsideContext } from "../../context/AsideContext";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const { isAsideOpen } = useContext(AsideContext);

  const portfolioItems = [
    {
      id: 1,
      category: "web-design",
      image: "/ecommerce.webp",
      title: "Ecommerce",
      link: "https://ecommerce.kanatosmon.com/",
      github: "https://github.com/osmonov-k/techStore",
      description:
        "A fully functional ecommerce platform featuring product listings, a shopping cart, and seamless user authentication. Built with a focus on performance and user experience.",
      tools: ["JavaScript", "React", "Tailwind CSS", "HTML5", "Context API"],
    },
    {
      id: 2,
      category: "web-design",
      image: "/portfolio.webp",
      title: "Portfolio",
      link: "https://kanatosmon.com/",
      github: "https://github.com/osmonov-k/my-portfolio",
      description:
        "A personal portfolio website showcasing my expertise in web development, game design, and business analytics/ML. Highlights include interactive projects, clean design, and responsive layouts.",
      tools: ["JavaScript", "React", "CSS3", "HTML5", "Context API"],
    },
    {
      id: 3,
      category: "wordpress",
      image: "/images/portfolio/3.jpg",
      title: "Wordpress",
      link: "https://example.com/wordpress",
      github: "https://github.com/yourusername/wordpress",
      description:
        "A WordPress-based project showcasing custom themes and plugins.",
      tools: ["WordPress", "PHP", "CSS3", "JavaScript"],
    },
    {
      id: 4,
      category: "web-design",
      image: "/images/portfolio/4.jpg",
      title: "Web Design",
      link: "https://example.com/web-design",
      github: "https://github.com/yourusername/web-design",
      description:
        "A modern web design project with a focus on user experience and accessibility.",
      tools: ["Figma", "HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 5,
      category: "wordpress",
      image: "/images/portfolio/5.jpg",
      title: "Wordpress",
      link: "https://example.com/wordpress2",
      github: "https://github.com/yourusername/wordpress2",
      description:
        "A WordPress blog with custom integrations and SEO optimization.",
      tools: ["WordPress", "SEO", "PHP", "CSS3"],
    },
    {
      id: 6,
      category: "photography",
      image: "/images/portfolio/6.jpg",
      title: "Photography",
      link: "https://example.com/photography",
      github: "https://github.com/yourusername/photography",
      description:
        "A photography portfolio showcasing stunning visuals and responsive design.",
      tools: ["JavaScript", "CSS3", "HTML5"],
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
          {filteredItems.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              isImageLeft={index % 2 !== 0} // Alternate image sides
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
