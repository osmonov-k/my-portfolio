import React, { useContext } from "react";
import "./Contact.css";
import { AsideContext } from "../../context/AsideContext";

const Contact = () => {
  const { isAsideOpen } = useContext(AsideContext);

  return (
    <section
      className={`contact section active ${isAsideOpen ? "aside-open" : ""}`}
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone"></i>
              <h4>Phone</h4>
              <p>(650)388-6038</p>
            </div>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marker"></i>
              <h4>Location</h4>
              <p>Bay Area, CA</p>
            </div>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <h4>Email</h4>
              <p>kanat.osmon.webdev@gmail.com </p>
            </div>
          </div>
        </div>

        <div className="row">
          <form action="#" className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Name*"
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    name=""
                    className="form-control"
                    placeholder="Email*"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Subject*"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name=""
                    placeholder="Your Message..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
