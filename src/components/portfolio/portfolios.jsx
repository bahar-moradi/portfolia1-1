import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/mg1.jpg'
import IMG2 from '../../assets/mg2.jpg'
import Port from './portModel'
import { useState } from 'react'

const Portfolio = () => {
  const[datas,setData] =useState([
            { id:1, src:IMG1,demo:"https://baharmoradi.com/", git:"https://github.com/bahar-moradi/grocery" },
            { id:2, src:IMG2,demo:"https://hospital.baharmoradi.com/" , git:"https://github.com/bahar-moradi/hospital"}
        ])
        
    
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
            {datas.map((p,index)=>(
                <Port key={index} src={p.src} demo={p.demo} git={p.git}/>
            ))}
        </div>

    </section>
  )
}

export default Portfolio