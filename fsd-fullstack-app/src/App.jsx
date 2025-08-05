import React from 'react'
import Login from './components/Login'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App