import React, { useState } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen,setMenuOpen] =useState(false)

   const handleMenu =()=>{
    setMenuOpen(!menuOpen);

   }
  return (
    <div className='nav'>
      <div className="left">
          <h1 className='logo'>Uber</h1>
        <div className={menuOpen ? "menu-left-content":"left-contents"}>
          <ul>
            <li>
              Ride
            </li>
            <li>
              Drive
            </li>
            <li>
              About
            </li>
           
          </ul>
        </div>
        
      </div>
      <button className="menu-opener" onClick={handleMenu}>Menu</button>
      <div className={menuOpen ? "nav-menu-right":"nav-right"}>
        
        <p>Help</p>
        <button>Login</button>
        <button>Sign Up</button>
      </div>

    </div>
  )
}

export default Navbar