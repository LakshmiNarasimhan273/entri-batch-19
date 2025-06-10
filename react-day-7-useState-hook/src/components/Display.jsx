import React from 'react'

function Display({message, changeMessage}) {
  return (
    <div>
        <h1>{message}</h1>
        <button onClick={changeMessage}>Send</button>
    </div>
  )
}

export default Display