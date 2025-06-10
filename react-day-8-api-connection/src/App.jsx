import React, { useEffect, useState } from 'react'
import Products from './components/Products';

// useState
// useEffect

function App() {
  const[post, setPost] = useState([]);
  
  // Component life-cycle
  // Mounting
  // Updating
  // Unmounting

  useEffect(() => { // mounting
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    .then(data => setPost(data)) // updating
    .catch(err => console.error(err)
    );
  }, []);
  return (
    <div>
      <h2>All post</h2>

      {
        post.map(allpost => (
          <div key={allpost.id}>
            <h4>{allpost.title}</h4>
            <p>{allpost.body}</p>
          </div>
        ))
      }
      <Products />
    </div>
  )
}

export default App