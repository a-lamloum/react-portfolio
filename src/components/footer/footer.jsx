import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        AhLaloum
      </a>
      {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      <ul className="premalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonials">testimonials</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socilas">
        <a href="https://www.facebook.com/PhAhmedOmar/" target="_blank">
          <FaFacebookF />
        </a>
        {/* <a href="https://twitter.com" target="_blank">
          <CgTwitter />
        </a> */}
        <a href="https://www.linkedin.com/in/ahmed-lamloum-510b77147/" target="_blank">
          <TiSocialLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ahmed Lamloum. All right reserved </small> 
      </div>
      
    </footer>
  );
};

export default Footer;
