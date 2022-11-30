import React from 'react'
import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">
          <img src={logo} alt=""/>
        </Link>
        <img src={hamburger} alt="" height="48" width="48"/>
    </div>
  )
}

export default Navbar