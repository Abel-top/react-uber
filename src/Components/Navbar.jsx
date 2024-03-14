import React, { useState } from 'react'
import '../styles/navbar.css'
import img from '../img/menu.png'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

function Navbar() {
  const [menuOpen,setMenuOpen] =useState(false)
   const handleMenu =()=>{
    setMenuOpen(!menuOpen);

   }
   const handleLink =()=>{
          if(menuOpen){
            setMenuOpen(!menuOpen)

          }else{
            
          }
   }
  return (
    <div className='nav'>
      <div className="left">
          <h1 className='logo' >
            <Link to='/' className='Link' onClick={handleLink}>Uber</Link></h1>
        <div className={menuOpen ? "menu-left-content animate":"left-contents"}>
          <ul onClick={handleLink}>
            <li>
              <Link className='Link' to='/ride'>Ride</Link>
            </li>
            <li href='/drive'>
            <Link className='Link' to='/drive'>Drive</Link>
            </li>
            <li>
            <Link className='Link' to='/about'>About</Link>
            </li>
          </ul>
        </div>
       
      </div>
      <div className="menu-opener" onClick={handleMenu}>
      <img src={img} width={50} height={50}/>
      </div>
      <div className={menuOpen ? "nav-menu-right animate":"nav-right"}>
        
        <p>Help</p>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      
    </div>
  )
}

export default Navbar