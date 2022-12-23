import React from 'react'

const Port = ({src,git,demo}) => {
  return (
    <article className='portfolio__item'>
        <div className='portfolio_item_image'>
        <img src={src}/>
        </div>
        <h3>this is a portfolio item title</h3>
        <div className='portfolio__item-btn'>
        <a href={git} className='btn' target='_blank'>GitHub</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>

    </article>
  )
}

export default Port