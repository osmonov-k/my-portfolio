import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { AsideContext } from "../../context/AsideContext";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const { isAsideOpen } = useContext(AsideContext);

  const portfolioItems = [
    {
      id: 789,
      category: "web-design",
      image: "/kare-landing.webp",
      title: "Kare - ecommerce platform",
      link: "https://kare.kanatosmon.com/",
      github: "https://github.com/osmonov-k/kare-ecommerce.git",
      description:
        "MERN stack e-commerce (React/Node.js/MongoDB) on Hostinger VPS. Features: JWT auth, Stripe payments, Tailwind CSS UI. Includes product browsing, shopping cart, order tracking. Uses Cloudinary for images, Axios for APIs.",
      tools: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Stripe API",
        "Tailwind CSS",
        "Axios",
        "Cloudinary",
        "Hostinger VPS",
      ],
    },
    {
      id: 786,
      category: "web-design",
      image: "/admin-kare-landing.webp",
      title: "Admin panel for Kare ecommerce ",
      link: "https://admin-kare.kanatosmon.com/",
      github: "https://github.com/osmonov-k/kare-ecommerce.git",
      description:
        "React/Node.js admin dashboard on Hostinger VPS. JWT-secured admin access for product management (add/delete). MongoDB storage, Cloudinary uploads, Axios API calls. Clean Tailwind interface.",
      tools: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Axios",
        "Cloudinary",
        "Hostinger VPS",
      ],
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
      id: 1,
      category: "web-design",
      image: "/ecommerce.webp",
      title: "Electric appliances e store",
      link: "https://ecommerce.kanatosmon.com/",
      github: "https://github.com/osmonov-k/techStore",
      description:
        "A fully functional website featuring product listings, a shopping cart, and seamless user authentication. Built with a focus on performance and user experience.",
      tools: ["JavaScript", "React", "Tailwind CSS", "HTML5", "Context API"],
    },
    {
      id: 3,
      category: "games",
      image: "/connect4.png",
      title: "Connect Four",
      link: "https://playfolio.kanatosmon.com/",
      github: "https://github.com/osmonov-k/playfolio",
      description:
        "A classic two-player strategy game I used to play with friends, where you try to connect four discs in a row. It’s all about strategy, blocking your opponent, and thinking ahead to claim victory!",

      tools: ["React", "modular CSS", "JavaScript", "useEffect"],
    },
    {
      id: 4,
      category: "games",
      image: "/wordle.png",
      title: "Wordle",
      link: "https://playfolio.kanatosmon.com/",
      github: "https://github.com/osmonov-k/playfolio",
      description:
        "A fun daily word guessing game with six tries to crack a five-letter word. Based on the original Wordle, it’s a perfect mix of logic and vocabulary challenges.",

      tools: ["React", "CSS3", "JavaScript", "DictionaryAPI"],
    },
    {
      id: 5,
      category: "games",
      image: "/memory.png",
      title: "Memory",
      link: "https://playfolio.kanatosmon.com/",
      github: "https://github.com/osmonov-k/playfolio",
      description:
        "A fun and challenging memory game where you flip cards to match pairs. It starts easy, but as the cards increase, it becomes a rewarding test of focus and recall. Can you remember where all the pairs are hidden?",
      tools: ["React", "modular CSS", "JavaScript", "useState"],
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
              className={filter === "games" ? "active" : ""}
              onClick={() => setFilter("games")}
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
