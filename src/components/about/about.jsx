import React from "react";
import "./about.css";
import ME from "../../assets/img.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ Happy Clients</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>projects</h5>
              <small>6+ projects</small>
            </article>
          </div>
          <p>
            I’m a junior Front-End Developer located in Saarbrücken. I have a
            serious passion for UI design, imporve study experience online.
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of outdoor activities, TV series and
            English literature. A family person and I love my wife, Interested
            in the entire frontend scope.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
