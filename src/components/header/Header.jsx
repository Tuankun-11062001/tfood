import React from 'react'
import Logo from "./logo/Logo"
import Navigation from "./navigation/Navigation"
import {BsArrowRight} from "react-icons/bs"
import "./Header.css"
const Header = () => {
  return (
    <header className='header container'>
        <Logo/>
        <Navigation/>
        <button className='btn btn-nav btn-transform'>Go to shop <BsArrowRight/></button>
    </header>
  )
}

export default Header