import React from 'react'
import './about.css'
import { FaCode, FaGraduationCap } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations'

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id='about'>
      <div className="about__header">
        <span className="about__subtitle">{t.aboutTitle}</span>
        <h2 className="about__title">About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__intro">
            <h3>{t.title}</h3>
            <p>{t.aboutDescription}</p>
          </div>

          <div className="about__stats">
            <div className="stat__item">
              <div className="stat__icon-wrapper">
                <VscFolderLibrary className='stat__icon'/>
              </div>
              <div className="stat__content">
                <span className="stat__number">{t.projectsCount.split(' ')[0]}</span>
                <span className="stat__label">Projects<br/>Completed</span>
              </div>
            </div>

            <div className="stat__item">
              <div className="stat__icon-wrapper">
                <FiUsers className='stat__icon'/>
              </div>
              <div className="stat__content">
                <span className="stat__number">{t.clientsCount.split(' ')[0]}</span>
                <span className="stat__label">Satisfied<br/>Clients</span>
              </div>
            </div>

            <div className="stat__item">
              <div className="stat__icon-wrapper">
                <FaCode className='stat__icon'/>
              </div>
              <div className="stat__content">
                <span className="stat__number">5+</span>
                <span className="stat__label">Technologies<br/>Mastered</span>
              </div>
            </div>
          </div>

          <div className="about__expertise">
            <div className="expertise__item">
              <FaCode className="expertise__icon" />
              <div>
                <h4>{t.modernDev}</h4>
                <p>{t.modernDevDesc}</p>
              </div>
            </div>
            <div className="expertise__item">
              <FaGraduationCap className="expertise__icon" />
              <div>
                <h4>{t.continuousGrowth}</h4>
                <p>{t.continuousGrowthDesc}</p>
              </div>
            </div>
          </div>

          <div className="about__cta">
            <a href="#portfolio" className="btn btn-primary">
              {t.viewProjects}
            </a>
            <a href="#contact" className="btn">
              {t.letsTalk}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
