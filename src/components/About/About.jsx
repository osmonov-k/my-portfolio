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
                  I'm Upvesh Kumar and <span>Web Developer</span>
                </h3>
                <p>
                  Hi! My name is Upvesh Kumar. I am a Web Developer, and I'm
                  very passionate and dedicated to my work. With 10 years
                  experience as a professional Web developer, I have acquired
                  the skills and knowledge necessary to make your project a
                  success. I enjoy every step of the design process, from
                  discussion and collaboration.{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday : <span>5 June 1992</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age : <span>28</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Website : <span>www.domain.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email : <span>info@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree : <span>M.Tech</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone : <span>+91 8800 000 000</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      City : <span>Mumbai</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Freelance : <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a href="#" className="btn">
                      Download Cv
                    </a>
                    <a
                      href="#contact"
                      data-section-index="1"
                      className="btn hire-me"
                    >
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>Javascript</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "76%" }}
                      ></div>
                      <div className="skill-porcent">76%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Wordpress</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "90%" }}
                      ></div>
                      <div className="skill-porcent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Java</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "80%" }}
                      ></div>
                      <div className="skill-porcent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Bootstrap</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "60%" }}
                      ></div>
                      <div className="skill-porcent">60%</div>
                    </div>
                  </div>
                </div>
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
                          <i className="fa fa-calendar"></i> 2013 - 2015
                        </h6>
                        <h4 className="timeline-title">
                          Master In Computer Science
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2011 - 2013
                        </h6>
                        <h4 className="timeline-title">
                          Studied At Delhi University
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2008 - 2011
                        </h6>
                        <h4 className="timeline-title">Bachelor Degree</h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
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
                          <i className="fa fa-calendar"></i> 2013 - 2015
                        </h6>
                        <h4 className="timeline-title">Backend Developer</h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2011 - 2013
                        </h6>
                        <h4 className="timeline-title">Frontend Developer</h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
                      </div>
                      {/* timeline Item End */}
                      {/* timeline Item */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2008 - 2011
                        </h6>
                        <h4 className="timeline-title">Graphic Designer</h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque diam non nisi semper, et
                          elementum lorem ornare.
                        </p>
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
