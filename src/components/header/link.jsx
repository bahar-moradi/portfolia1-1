import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
export default function link() {
  return (
    <div className='social-link'>
        <a href='https://www.linkedin.com/in/bahar-moradi/'target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><BsGithub/></a>
        <a href='https://gmail.com/bahar.moradi33@gamil.com' target='_blank'><SiGmail/></a>
    </div>
  )
}
