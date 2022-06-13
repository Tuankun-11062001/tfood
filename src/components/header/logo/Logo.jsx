import React from 'react'
import logo from "../../../asset/img/logo.png"
import "./Logo.css"
const Logo = () => {
  return (
    <>
        <a href="#" className='logo'>
            <img src={logo} alt="TF" className='logo--img' />
        </a>
    </>
  )
}

export default Logo