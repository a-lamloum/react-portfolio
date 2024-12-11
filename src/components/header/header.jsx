// eslint-disable-next-line
import React from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../assets/hero-me2.png";
import { HeaderSocials } from "./socials";
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <div className="header__text">
            <div className="text-content">
              <h4 className="greeting">{t.greeting}</h4>
              <h1 className="name">{t.name}</h1>
              <h3 className="title">{t.title}</h3>
              <p className="description">{t.description}</p>
            </div>
            <CTA />
          </div>
          
          <div className="header__image">
            <div className="image-wrapper">
              <img src={ME} alt={t.name} />
              <div className="floating-elements">
                <div className="floating-tag react">React</div>
                <div className="floating-tag js">JavaScript</div>
                <div className="floating-tag css">CSS</div>
              </div>
            </div>
          </div>
        </div>
        
        <HeaderSocials />
        
        <div className="scroll__wrapper">
          <a href="#contact" className="scroll__down">
            <span>{t.scrollDown}</span>
            <div className="scroll__icon"></div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
