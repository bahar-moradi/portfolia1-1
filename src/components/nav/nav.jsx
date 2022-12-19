import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import{FaUserAlt} from 'react-icons/fa'
import {BsBookFill}from 'react-icons/bs'
import{MdMessage}from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#'? 'active':''}><AiFillHome/></a>
      <a href='#about1' onClick={()=>setActiveNav('#about1')} className={activeNav==='#about1'? 'active':''}><FaUserAlt/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BsBookFill/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><MdMessage/></a>
    </nav>
  )
}

export default Nav