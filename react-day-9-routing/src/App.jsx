import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "300px"}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
    </div>
  )
}

export default App