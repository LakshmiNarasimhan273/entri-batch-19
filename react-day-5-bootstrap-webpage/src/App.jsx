import React from 'react'
import Navigationbar from './components/Navigationbar'
import Herosection from './components/Herosection'
import Allproducts from './components/Allproducts'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navigationbar />
      <Herosection />
      <Allproducts />
      <Contact />
      <Footer />
    </div>
  )
}

export default App