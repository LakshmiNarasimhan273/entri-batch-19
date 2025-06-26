import React from 'react'
import Display from './components/Display'
import { useSelector } from 'react-redux'

function App() {
  const count = useSelector(state => state.count)
  return (
    <div>
      <Display />
      <p>{count}</p>
    </div>
  )
}

export default App