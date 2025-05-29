import React from 'react'

function Navigationbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container'>
            <h1 className='navbar-brand fw-bold'>Mywebsite</h1>

            <button className='navbar-toggler' type='button' data-bs-toggler="collapse" data-bs-target="#toggleMenu">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end' id='toggleMenu'>
                <ul className='navbar-nav'>
                    <li className='nav-item nav-link'>Home</li>
                    <li className='nav-item nav-link'>Products</li>
                    <li className='nav-item nav-link'>My profile</li>
                    <li className='nav-item nav-link'>My orders</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navigationbar