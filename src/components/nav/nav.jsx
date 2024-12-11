import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Nav = () => {
  const [activeClass, setActive] = useState("#");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-logo">
          <a href="#">AL</a>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <a
            href="#"
            onClick={() => {
              setActive("#");
              setIsMenuOpen(false);
            }}
            className={activeClass === "#" ? "active" : ""}
          >
            <AiOutlineHome /> <span>Home</span>
          </a>
          <a
            href="#about"
            onClick={() => {
              setActive("#about");
              setIsMenuOpen(false);
            }}
            className={activeClass === "#about" ? "active" : ""}
          >
            <AiOutlineUser /> <span>About</span>
          </a>
          <a
            href="#experience"
            onClick={() => {
              setActive("#experience");
              setIsMenuOpen(false);
            }}
            className={activeClass === "#experience" ? "active" : ""}
          >
            <BiBookBookmark /> <span>Experience</span>
          </a>
          <a
            href="#portfolio"
            onClick={() => {
              setActive("#portfolio");
              setIsMenuOpen(false);
            }}
            className={activeClass === "#portfolio" ? "active" : ""}
          >
            <CgWorkAlt /> <span>Portfolio</span>
          </a>
          <a
            href="#services"
            onClick={() => {
              setActive("#services");
              setIsMenuOpen(false);
            }}
            className={activeClass === "#services" ? "active" : ""}
          >
            <RiServiceLine /> <span>Services</span>
          </a>
          <a
            href="#contact"
            onClick={() => {
              setActive("#contact");
              setIsMenuOpen(false);
            }}
            className={activeClass === "#contact" ? "active" : ""}
          >
            <BiMessageDetail /> <span>Contact</span>
          </a>
        </div>

        <div className="nav-controls">
          <ThemeToggle />
          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
