import React from 'react'
import './footer.css'
import {BsLinkedin}from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <a href='#' className='footer__logo'>BAHAR</a>
      <ul className='list-item'>
        <li><a href="#"></a></li>
        <li><a href="#about1">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testemonia'>Testimonials</a></li>
      </ul>
      <div className='icons'>
        <a href='https://www.linkedin.com/in/bahar-moradi/'target="_blank"><BsLinkedin/></a>
        <a href='https://www.instagram.com/' target="_blank"><AiOutlineInstagram/></a>
        <a href='https://nl-nl.facebook.com/' target='_blank'><BsFacebook/></a>
      </div>
    </div>
  )
}

export default Footer