import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { FaCode, FaServer, FaMobile } from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <div className="services__header">
        <span className="section__subtitle">What I Offer</span>
        <h2 className="section__title">Services</h2>
      </div>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <FaCode className="service__icon" />
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Modern, responsive web applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive UI/UX design implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React.js and Next.js development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance optimization</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <FaServer className="service__icon" />
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful API development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database design and optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server-side application logic</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Authentication and security</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <FaMobile className="service__icon" />
            <h3>Mobile Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>React Native applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-platform development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile UI/UX implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>App performance optimization</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services