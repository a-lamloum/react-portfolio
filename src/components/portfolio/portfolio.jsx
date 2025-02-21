import React, { useState, useEffect } from 'react';
import './portfolio.css';
import { BsGithub } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { FiFolder } from "react-icons/fi";
import data from '../../data'; // Import your updated dataset

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FiFolder /> },
    { id: 'web-app', label: 'Web Apps', icon: <FiFolder /> },
    { id: 'website', label: 'Websites', icon: <FiFolder /> },
    { id: 'game', label: 'Games', icon: <FiFolder /> },
    { id: 'frontend-mentor', label: 'Frontend Mentor', icon: <FiFolder /> },
    { id: 'mini-project', label: 'Mini Projects', icon: <FiFolder /> }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? data
    : data.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio">
      <div className="portfolio__header">
        <span className="section__subtitle">My Recent Work</span>
        <h2 className="section__title">Portfolio</h2>
      </div>

      <div className="portfolio__filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`portfolio__filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.icon}
            {category.label}
          </button>
        ))}
      </div>

      <div className="container portfolio__container">
        {filteredProjects.map(({ id, image, title, github, demo, tech }, index) => (
          <article 
            key={id} 
            className={`portfolio__item ${isInView ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <div className="portfolio__item-overlay">
                <div className="portfolio__item-cta">
                  {github !== "#" && (
                    <a href={github} className="portfolio__item-btn" target="_blank" rel="noreferrer" aria-label="View GitHub Repository">
                      <BsGithub />
                      <span>Code</span>
                    </a>
                  )}
                  <a href={demo} className="portfolio__item-btn" target="_blank" rel="noreferrer" aria-label="View Live Demo">
                    <TbExternalLink />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <div className="portfolio__item-tech-stack">
                {tech.split(" ").map((item, index) => (
                  <span key={index} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
