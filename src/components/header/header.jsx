import React from 'react'
import './header.css'
import BTN from './btn'
import IMG from '../../assets/IMG-6405.jpg'
import LINK from './link'
import Typical from 'react-typical'
const header = () => {
  return (
    <div className='header'>
    <div className='container header-container'>
      <h5>Heloo I'm</h5>
      <h1>
        <Typical
        steps={['Bahar',1000,'Ftont-End-Developer ',1000,'Hard-working',1000,'Enthusiastic Dev',1000]}
        loop={Infinity}
        />
      </h1>
      <h5 className='text-light'>Front-End-Developer</h5>
      <BTN/>
      <LINK/>
      <div className='image'>
        <img src={IMG} alt=""/>
      </div>

      <a href='#contact' className='scroll__down'>ScrollDown</a>
    </div>
    </div>
  )
}

export default header