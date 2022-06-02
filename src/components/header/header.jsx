// eslint-disable-next-line
import React from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../assets/hero-me2.png";
import { HeaderSocials } from "./socials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Ahmed Lamloum</h1>
        <h5 className="text-light header__container-subTitle">Front-end web development
</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="me">
          <img src={ME} alt="Profile Picture" />
        </div>
      </div>
    </header>
  );
};

export default header;
