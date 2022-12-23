import React from 'react'
import {BsPatchCheckFill}from 'react-icons/bs'


function exModel(props) {
  return (
    <div className='experience__card'>
        <article className='experience__details'>
            <BsPatchCheckFill className='icon mt-2 '/>
            <div className='textt'>
                <h4>{props.text}</h4>
                <small className='text-light'>{props.level}</small>
            </div>

        </article>
    </div>
  )
}

export default exModel