import React from 'react'
import './about.css'
import ME from '../../assets/img.jpeg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>2+ Happy Clients</small>
              </article>
              <article className='about__card'>
                <AiFillFolderOpen className='about__icon' />
                <h5>projects</h5>
                <small>6+ projects</small>
              </article>
            </div>
            <p>
            After success with WordPress front-end development using Elementor, I am eager to continue my career by joining a company with a unique perspective, hard work and interactive team where I will continue expanding my Front-End knowledge into perfecting accessibility and responsive design.             </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About