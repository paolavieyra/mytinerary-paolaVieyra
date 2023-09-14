import React from 'react'
import underConstruction from '../assets/img/underConstruction.jpg'
import Nav from './Nav'
import logo from '../assets/img/logoMytinerary.png'
 const Footer = () => {
  return (
    <footer className='flex h-[25vh] items-center pb-4 pl-4 justify-between' >
          
            <Nav />
            <p></p>
            <img className='h-24 mx-1' src={logo} alt="Mytinerary" />
    </footer>
  )
}
export default Footer