import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrFacebookOption} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/ahmed-lamloum-510b77147/' target='_blank'><BsLinkedin/></a>
     <a href='https://github.com/a-lamloum' target='_blank'><FaGithub/></a>
     <a href='https://www.facebook.com/PhAhmedOmar/' target='_blank'><GrFacebookOption/></a>
    </div>
  )}

export {HeaderSocials};