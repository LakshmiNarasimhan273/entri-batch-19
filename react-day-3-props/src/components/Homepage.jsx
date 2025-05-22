import React from 'react'

function Homepage({status, name}) {
  return (
    <div>
        {
            status === "pending" ? ( 
            <p>Loading....</p>
         ) : status === "success" ? (
            <p style={{color: "green", fontWeight: "bold"}}>Logged in as {name}</p>
         ) : status === "failed" ? (
            <p style={{color: "red"}}>Login Failed</p>
         ) : (
         <p>Network error</p>
        )
        }
    </div>
  )
}

export default Homepage