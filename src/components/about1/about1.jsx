import React from 'react'
import './about1.css'
import IMG from '../../assets/IMG-6405.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'
 
 const about1 = () => {
  return (
    <section id='about1'>
      <h5 className='pt-5'>get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={IMG}/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card '>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+1year working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>+1year working</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>+1year working</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis atque nemo cum, blanditiis assumenda repellendus quas, voluptas quaerat iste odio ducimus voluptates aut eos at sint corporis ex velit esse!
          </p>
          <a href='#contact'className='btn btn-primary'>lets talk</a>
        </div>

      </div>          
          
    </section>
  )

 }
 
 export default about1
  

