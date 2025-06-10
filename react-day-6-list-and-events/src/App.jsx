import React, { useState } from 'react'
import Products from './components/Products';

//Events 
function App() {
  const [message, setMessage] = useState('');

  const changeMessage = () => {
    setMessage("Message sent");
  }

  const alertMessage = () => {
    alert("Event triggered");
  }
  return (
    <div>
      <h1>Book ticket</h1>
      <button onClick={alertMessage}>Book now</button>
      <Products message={message} changeMessage={changeMessage} />
    </div>
  )
}

export default App