import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about1/about1'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolios'
import Contact from './components/contact/contact'
import Testemonia from './components/testemonia/testemonia'
import Footer from './components/footer/footer'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (
    <>
     
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Testemonia/>
        <Contact/>
        <Footer/>
      


    </>
  )
}

export default App