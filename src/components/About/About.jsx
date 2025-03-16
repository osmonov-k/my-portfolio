// src/components/About/About.jsx
import React, { useContext } from "react";
import "./About.css";
import { AsideContext } from "../../context/AsideContext";

const About = () => {
  const { isAsideOpen } = useContext(AsideContext);

  return (
    <section
      className={`about section active ${isAsideOpen ? "aside-open" : ""}`}
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  <span>Web Developer</span>
                </h3>
                <p>
                  I’m a front-end developer passionate about crafting
                  accessible, high-performance user interfaces that seamlessly
                  blend thoughtful design with robust engineering. My work
                  focuses on creating intuitive, pixel-perfect experiences that
                  not only look great but are meticulously built for usability
                  and scalability. With a strong foundation in React.js,
                  TypeScript, and modern web technologies, I thrive at the
                  intersection of design and development, delivering solutions
                  that drive business growth and exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="personal-info padd-15">
              <div className="row">
                <a
                  href="/KanatOsmon_FrontendEngineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2018 - 2019
                        </h6>
                        <h4 className="timeline-title">
                          Master of Business Analytics (MBAN)
                        </h4>
                        <p className="timeline-text">
                          Hult International Business School, San Francisco, CA
                        </p>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2019 - 2020
                        </h6>
                        <h4 className="timeline-title">
                          Master of International Business (MIB)
                        </h4>
                        <p className="timeline-text">
                          Hult International Business School, San Francisco, CA
                        </p>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2014 - 2018
                        </h6>
                        <h4 className="timeline-title">
                          Bachelor of Business Administration (BBA), Finance
                        </h4>
                        <p className="timeline-text">
                          American University of Central Asia, Bishkek
                        </p>
                      </div>
                      {/* timeline Item End */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2023 - Present
                        </h6>
                        <h4 className="timeline-title">
                          Frontend Software Engineer | Bank of America | San
                          Jose, CA{" "}
                        </h4>
                        <p className="timeline-text">
                          Modernized the Wires application using React, Redux,
                          and TypeScript while ensuring WCAG 2.1 Level AAA
                          compliance. Led feature development and bug
                          resolution, improving performance, accessibility, and
                          user experience.
                        </p>
                        <div className="timeline-skills">
                          <span className="timeline-skill">React</span>
                          <span className="timeline-skill">Redux</span>
                          <span className="timeline-skill">TypeScript</span>
                          <span className="timeline-skill">HTML5</span>
                          <span className="timeline-skill">CSS3</span>
                        </div>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2021 - 2023
                        </h6>
                        <h4 className="timeline-title">
                          Frontend Engineer | Edmunds | Santa Monica, CA
                        </h4>
                        <p className="timeline-text">
                          Built 100+ reusable UI components with React and
                          TypeScript, ensuring accessibility and performance.
                          Optimized test coverage to 95% and developed scalable
                          applications using RTK Query, Node.js, and Three.js.
                        </p>
                        <div className="timeline-skills">
                          <span className="timeline-skill">React</span>
                          <span className="timeline-skill">JavaScript</span>
                          <span className="timeline-skill">WCAG</span>
                          <span className="timeline-skill">Jest</span>
                          <span className="timeline-skill">Node.js</span>
                        </div>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2019 - 2021
                        </h6>
                        <h4 className="timeline-title">
                          QA Tester | Illumio | Sunnyvale, CA
                        </h4>
                        <p className="timeline-text">
                          Developed automated test scripts with Selenium,
                          Cucumber, and Java, achieving 85% automation coverage.
                          Conducted API, database, and UI testing while
                          streamlining CI/CD pipelines and ensuring software
                          reliability.
                        </p>
                        <div className="timeline-skills">
                          <span className="timeline-skill">JAVA</span>
                          <span className="timeline-skill">Selenium</span>
                          <span className="timeline-skill">Cucumber</span>
                          <span className="timeline-skill">Rest</span>
                          <span className="timeline-skill">SQL</span>
                        </div>
                      </div>
                      {/* timeline Item End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
