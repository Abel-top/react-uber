import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import img from '../img/img1-car.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Home({menu}) {
     
  useEffect(()=>{
    AOS.init()
  })

  return (
    <div className='home' data-aos="fade-up" data-aos-duration="3000" >
      <div className="home-left">
        <h1>Go anywhere with Uber</h1>
        <p>Request a ride, hop in, and go.</p>
        <form className='home-form'>
        <input type="text" placeholder='Enter Location'/>
        <input type="text" placeholder='Enter Destination'/>
        <button>See Prices</button>
        </form>
       
      </div>
      <div className="home-right">
        <img src={img} width={470} height={600}/>
      </div>
    </div>
  )
}

export default Home