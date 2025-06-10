import React from 'react'
import { useState } from 'react'
import Display from './Display';

function Message() {
    const[message, setMessage] = useState("");

    const changeMessage = () => {
        setMessage("Message sent");
    }
  return (
    <div>
        <Display message={message} changeMessage={changeMessage} />
    </div>
  )
}

export default Message