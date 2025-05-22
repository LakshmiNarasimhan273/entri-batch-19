import React from 'react'
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';

function App() {
  const status = "failed"; // pending, success, failed
  const username = "Narasimhan";
  return (
    <div>
      {/* Props here */}
      {/* <Welcome name={username} /> */}
      <Homepage status={status} name={username} />
    </div>
  )
}

export default App