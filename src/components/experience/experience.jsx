import React from 'react'
import './experience.css'
import Model from './exModel'

const experience = () => {
  return (
    <section id='experience'>
      <h5>what Skills I Have</h5>
      <h2>My EXperience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <Model
            text='HTML'
            level='Intermediate'
            />
            <Model
            text='css'
            level='Intermediate'
            />
            <Model
            text='scss'
            level='Intermediate'
            />
            <Model
            text='javascript'
            level='Intermediate'
            />
            <Model
            text='bootstrapt'
            level='Intermediate'
            />
            <Model
            text='github'
            level='Intermediate'
            />
            <Model
            text='react'
            level='EntryLevel'
            />
            

          </div>
        </div>

      </div>
    </section>
  )
}

export default experience