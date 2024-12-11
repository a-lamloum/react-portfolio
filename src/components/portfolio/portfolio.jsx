import React, { useState, useEffect } from 'react';
import './portfolio.css';
import { BsGithub } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { FiFolder } from "react-icons/fi";

// Import images
import ezlearn from '../../assets/ezlearn.jpg';
import karamella from '../../assets/karamella.jpg';
import library from '../../assets/library.jpg';
import nftCard from '../../assets/nft-card.jpg';
import orderSummary from '../../assets/order-summary-card.jpg';
import qrCode from '../../assets/qr-code-card.jpg';
import reactPortfolio from '../../assets/react-portfolio.jpg';
import starRating from '../../assets/star-rating-card.jpg';
import tindog from '../../assets/tindog.jpg';

const portfolioData = [
  {
    id: 1,
    image: ezlearn,
    title: 'EZ Learn Platform',
    description: 'An interactive e-learning platform with real-time collaboration features.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'web-app',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io']
  },
  {
    id: 2,
    image: karamella,
    title: 'Karamella E-commerce',
    description: 'Full-featured e-commerce platform with secure payment integration.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'web-app',
    tech: ['React', 'Express', 'MySQL', 'Stripe']
  },
  {
    id: 3,
    image: library,
    title: 'Digital Library System',
    description: 'Modern library management system with real-time availability tracking.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'web-app',
    tech: ['React', 'Firebase', 'Cloud Functions']
  },
  {
    id: 4,
    image: nftCard,
    title: 'NFT Card Component',
    description: 'Responsive NFT card design with modern hover effects.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'ui-ux',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 5,
    image: orderSummary,
    title: 'Order Summary Component',
    description: 'Clean and intuitive order summary interface.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'ui-ux',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 6,
    image: qrCode,
    title: 'QR Code Generator',
    description: 'Dynamic QR code generator with customization options.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'web-app',
    tech: ['React', 'QR Code API']
  },
  {
    id: 7,
    image: reactPortfolio,
    title: 'React Portfolio',
    description: 'Modern portfolio website built with React.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'web-app',
    tech: ['React', 'CSS', 'EmailJS']
  },
  {
    id: 8,
    image: starRating,
    title: 'Interactive Rating Component',
    description: 'Dynamic star rating system with smooth animations.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'ui-ux',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 9,
    image: tindog,
    title: 'Tindog Landing Page',
    description: 'Modern and responsive landing page design.',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    category: 'web-app',
    tech: ['HTML', 'CSS', 'Bootstrap']
  }
];

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
    { id: 'ui-ux', label: 'UI/UX Design', icon: <FiFolder /> }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter(project => project.category === selectedCategory);

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
        {filteredProjects.map(({ id, image, title, description, github, demo, tech }, index) => (
          <article 
            key={id} 
            className={`portfolio__item ${isInView ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <div className="portfolio__item-overlay">
                <div className="portfolio__item-cta">
                  <a href={github} className="portfolio__item-btn" target="_blank" rel="noreferrer" aria-label="View GitHub Repository">
                    <BsGithub />
                    <span>Code</span>
                  </a>
                  <a href={demo} className="portfolio__item-btn" target="_blank" rel="noreferrer" aria-label="View Live Demo">
                    <TbExternalLink />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <p className="portfolio__item-description">{description}</p>
              <div className="portfolio__item-tech-stack">
                {tech.map((item, index) => (
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