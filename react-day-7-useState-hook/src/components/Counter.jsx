import React from 'react'
import { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

  return (
    <div style={{marginTop: "20px"}}>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
        <button onClick={handleReset} disabled={count === 0}>Reset Count</button>
    </div>
  )
}

export default Counter