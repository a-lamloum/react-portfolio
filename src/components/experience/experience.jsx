import React, { useEffect, useRef } from 'react';
import './experience.css';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

const Experience = () => {
  const progressRefs = useRef([]);

  const frontendSkills = [
    { 
      name: 'React.js', 
      level: 'Advanced', 
      progress: '90%',
      description: 'Component Architecture, Hooks, Context API',
      icon: <FaReact className="skill-icon react" />
    },
    { 
      name: 'JavaScript', 
      level: 'Advanced', 
      progress: '90%',
      description: 'ES6+, Async/Await, DOM Manipulation',
      icon: <SiJavascript className="skill-icon javascript" />
    },
    { 
      name: 'TypeScript', 
      level: 'Intermediate', 
      progress: '75%',
      description: 'Type Safety, Interfaces, Generics',
      icon: <SiTypescript className="skill-icon typescript" />
    },
    { 
      name: 'HTML5', 
      level: 'Advanced', 
      progress: '90%',
      description: 'Semantic HTML, Accessibility, SEO',
      icon: <FaHtml5 className="skill-icon html" />
    },
    { 
      name: 'CSS3', 
      level: 'Advanced', 
      progress: '90%',
      description: 'Flexbox, Grid, Animations',
      icon: <FaCss3Alt className="skill-icon css" />
    },
    { 
      name: 'Tailwind CSS', 
      level: 'Advanced', 
      progress: '90%',
      description: 'Utility Classes, Custom Config, Responsive Design',
      icon: <SiTailwindcss className="skill-icon tailwind" />
    },
  ];

  const backendSkills = [
    { 
      name: 'Node.js', 
      level: 'Intermediate', 
      progress: '75%',
      description: 'Express.js, RESTful APIs, Middleware',
      icon: <FaNodeJs className="skill-icon node" />
    },
    { 
      name: 'MongoDB', 
      level: 'Intermediate', 
      progress: '75%',
      description: 'CRUD Operations, Aggregation, Indexing',
      icon: <SiMongodb className="skill-icon mongodb" />
    },
    { 
      name: 'Firebase', 
      level: 'Intermediate', 
      progress: '75%',
      description: 'Authentication, Firestore, Real-time DB',
      icon: <SiFirebase className="skill-icon firebase" />
    },
    { 
      name: 'Git', 
      level: 'Advanced', 
      progress: '90%',
      description: 'Version Control, Branching, CI/CD',
      icon: <FaGitAlt className="skill-icon git" />
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-progress');
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const renderSkillCard = (skill, index, arrayLength) => (
    <div 
      className="experience__details" 
      key={index}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="skill__header">
        <div className="skill__icon-wrapper">
          {skill.icon}
          <div className="skill__level-badge">{skill.level}</div>
        </div>
        <div className="skill__title">
          <h4>{skill.name}</h4>
          <p className="skill__description">{skill.description}</p>
        </div>
      </div>
      <div className="skill__progress-wrapper">
        <div className="skill__progress">
          <div 
            className="skill__progress-bar"
            ref={el => progressRefs.current[index] = el}
            style={{ width: skill.progress }}
          >
            <span className="progress__tooltip">{skill.progress}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience">
      <div className="experience__header">
        <span className="section__subtitle">Technical Proficiency</span>
        <h2 className="section__title">Skills & Expertise</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <h3>Frontend Development</h3>
            <div className="skills__grid">
              {frontendSkills.map((skill, index) => 
                renderSkillCard(skill, index, frontendSkills.length)
              )}
            </div>
          </div>
        </div>

        <div className="experience__backend">
          <div className="experience__content">
            <h3>Backend Development</h3>
            <div className="skills__grid">
              {backendSkills.map((skill, index) => 
                renderSkillCard(skill, index + frontendSkills.length, backendSkills.length)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
