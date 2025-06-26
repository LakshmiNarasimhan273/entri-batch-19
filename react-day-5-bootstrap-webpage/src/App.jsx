import React from 'react'
import Navigationbar from './components/Navigationbar'
import Herosection from './components/Herosection'
import Allproducts from './components/Allproducts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Herosection />} />
        <Route path='/products' element={<Allproducts />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App