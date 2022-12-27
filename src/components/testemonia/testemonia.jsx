import React from 'react'
import Mohsen from '../../assets/mohsen.png'
import Somaye from '../../assets/somaye.png'
import Milad from '../../assets/milad.png'
import Maryam from '../../assets/maryam.jpg'
import './testemonia.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const data=[
    {imag:Mohsen,name:'Mohsen' ,review:'she is so hardworking , she in never give up' },
    {imag:Somaye,name:'Somaye' ,review:'she is likable and easy to work with.She is always polite and remain calm, even under stressful circumstances. she is always considerate of others  time when committing to project deadlines'},
    {imag:Milad,name:'Milad' ,review:'she is so flexible , she is pro-active person and she is patient '},
    {imag:Maryam,name:'Maryam' ,review:'she is so strong in communicate with other people and so sociable'},
]

const Testemonia = () => {
  return (
    <section id='testemonia'>
        <h5>review from my freinds</h5>
        <h2>Testimonials</h2>
        <Swiper  spaceBetween={50} className='container testimonia__container'>
        
            {
                data.map(({imag,name,review},index)=>{
                    return(
                        <SwiperSlide key={index} className='testomonia'>
                            <div className='client__avatar'>
                            <img src={imag}></img>
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>

                         </SwiperSlide>

                    )
                }
                )
            }
            

        </Swiper>

    </section>
  )
}

export default Testemonia