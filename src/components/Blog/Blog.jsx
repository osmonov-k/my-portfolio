// src/components/Blog/Blog.jsx
import React, { useContext } from "react";
import "./Blog.css";
import { AsideContext } from "../../context/AsideContext";

const Blog = () => {
  const { isAsideOpen } = useContext(AsideContext);

  const blogItems = [
    {
      id: 1,
      image: "/src/assets/images/blog/blog1.jpg",
      date: "4 jun 2020",
      title: "Responsive Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
      tags: ["Html", "css"],
    },
    {
      id: 2,
      image: "/src/assets/images/blog/blog2.jpg",
      date: "4 jun 2020",
      title: "Creative Slideshow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
      tags: ["Html", "Javascript"],
    },
    {
      id: 3,
      image: "/src/assets/images/blog/blog3.jpg",
      date: "4 jun 2020",
      title: "Image Gallery Lightbox",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.",
      tags: ["Javascript"],
    },
  ];

  return (
    <section
      className={`blog section active ${isAsideOpen ? "aside-open" : ""}`}
      id="blog"
    >
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Latest Blog</h2>
          </div>
        </div>
        <div className="row">
          {blogItems.map((item) => (
            <div className="blog-item padd-15" key={item.id}>
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src={item.image} alt={item.title} />
                  <div className="blog-date">{item.date}</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">{item.title}</h4>
                  <p className="blog-description">{item.description}</p>
                  <p className="blog-tags">
                    Tags :{" "}
                    {item.tags.map((tag, index) => (
                      <a href="#" key={index}>
                        {tag}
                      </a>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
