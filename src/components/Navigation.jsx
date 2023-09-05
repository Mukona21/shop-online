import React, { useState, useRef } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import Logo from '../assets/favicon-32x32.png'

const Navigation = () => {
  const navRef = useRef()
  // const [isOpen, setIsOpen] = useState(false)

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <div className='wrapper-header'>
      <header>
        <div className='logo'>
          <img src={Logo} />
          <span className='logo-text'>ShopOnline</span>
        </div>
        <nav ref={navRef}>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Products</a>
          <a href='#'>Contact</a>
          <FaTimes className='nav-btn nav-close' onClick={showNavbar} />
        </nav>
        <div className='login'>Login</div>
        <FaBars className='nav-btn' onClick={showNavbar} />
      </header>
    </div>
  )
}

export default Navigation
