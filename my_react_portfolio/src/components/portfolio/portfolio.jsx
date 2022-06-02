import React from 'react'
import './portfolio.css'
import data from './data'
import {BsGithub} from "react-icons/bs"
import {TbExternalLink} from "react-icons/tb"
 
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id, title, image, github, demo}) => {
          return <article key={id} className='portfolio__item'>
            <img src={image} className='item__img'></img>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='' target="_blank"><BsGithub/> Github</a>
              <a href={demo} className='' target="_blank" ><TbExternalLink/> Live</a>
            </div>
          </article>
      })
      }
        
      </div>
    </section>
  )
}

export default Portfolio