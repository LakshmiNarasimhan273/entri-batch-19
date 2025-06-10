import { useState } from 'react'
import Counter from './components/Counter';
import Message from './components/Message';

function App() {
  // useState - holds variable and setFunction
  const[name, setName] = useState("Narasimhan");
  //  variable  function
  // useState syntax

  const updateName = () => {
    setName("Lakshmi Narasimhan");
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={updateName}>Update name</button>
      <Counter />
      <Message />
    </div>
  )
}

export default App