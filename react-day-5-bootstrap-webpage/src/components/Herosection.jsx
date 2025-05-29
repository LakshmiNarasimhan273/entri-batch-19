import React from 'react'
import "./herosection.css";

function Herosection() {
  return (
    <section id='hero' className='hero-section text-white d-flex align-items-center justify-content-center'>
        <div className='container text-center'>
            <h1 className='display-2 fw-bold'>Fullstack web development using MERN</h1>
            <p className='lead'>Learning a fullstack web development in vernacular language at Entri</p>
        </div>
    </section>
  )
}

export default Herosection