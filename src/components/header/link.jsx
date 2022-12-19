import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
export default function link() {
  return (
    <div className='social-link'>
        <a href='https://linkdin.com'target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><BsGithub/></a>
        <a href='https://gmail.com' target='_blank'><SiGmail/></a>
    </div>
  )
}
