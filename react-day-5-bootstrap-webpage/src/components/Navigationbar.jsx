import React from 'react'
import { Link } from 'react-router-dom'

function Navigationbar() {
  return (
    <nav className='navbar navbar-dark bg-dark fixed-top'>

      <div className='container'>
        <a href="#" className='navbar-brand fw-bold'>Mywebpage</a>

        <ul className='nav'>
          <li className='nav-item'><Link to="/" className='nav-link text-white'>Home</Link></li>
          <li className='nav-item'><Link to="/products" className='nav-link text-white'>Products</Link></li>
          <li className='nav-item'><Link to="/contact" className='nav-link text-white'>Contact</Link></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navigationbar