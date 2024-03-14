import React, { useState } from 'react'
import '../styles/home.css'
import img from '../img/img1-car.jpg'

function Home({menu}) {
     
 

  return (
    <div className='home'>
      <div className="home-left">
        <h1>Go anywhere with Uber</h1>
        <p>Request a ride, hop in, and go.</p>
       <input type="text" placeholder='Enter Location'/>
       <input type="text" placeholder='Enter Destination' />
      </div>
      <div className="home-right">
        <img src={img} width={470} height={600}/>
      </div>
    </div>
  )
}

export default Home