import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="conatiner__medical">
          <h3>FrontEnd Experience</h3>
          <div className="container__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>HTML</h5>
                <small className="text-light">Intermeidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>CSS</h5>
                <small className="text-light">Intermeidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>BootStrap</h5>
                <small className="text-light">Intermeidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>React Js</h5>
                <small className="text-light">Intermeidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>Elementor</h5>
                <small className="text-light">Intermeidate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="container__frontEnd">
          <h3>BackEnd Experience</h3>
          <div className="container__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>Node Js</h5>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>Python</h5>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h5>WordPress</h5>
                <small className="text-light">Intermeidate</small>
              </div>
            </article> */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
