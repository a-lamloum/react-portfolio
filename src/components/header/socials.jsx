import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrFacebookOption} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='#' target='_blank'><BsLinkedin/></a>
     <a href='https://github.com/a-lamloum' target='_blank'><FaGithub/></a>
     <a href='#' target='_blank'><GrFacebookOption/></a>
    </div>
  )}

export {HeaderSocials};