import React from 'react'

function Navigationbar() {
  return (
    <nav className='navbar navbar-dark bg-dark fixed-top'>

        <div className='container'>
            <a href="#" className='navbar-brand fw-bold'>Mywebpage</a>

            <ul className='nav'>
                <li className='nav-item'><a href="#hero" className='nav-link text-white'>Home</a></li>
                <li className='nav-item'><a href="#products" className='nav-link text-white'>Products</a></li>
                <li className='nav-item'><a href="#contact" className='nav-link text-white'>Contact</a></li>
            </ul>
        </div>

    </nav>
  )
}

export default Navigationbar