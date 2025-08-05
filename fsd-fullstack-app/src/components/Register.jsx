import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[role, setRole] = useState("");
    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8081/auth/register", {username, password, role});
            alert("Registration successful");
            navigate("/");
        }catch(err){
            console.error(err);            
        }
    }

  return (
    <div>
        <h1>Register page</h1>
        <form onSubmit={handleRegister}>
            <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder='user or admin' onChange={(e) => setRole(e.target.value)} />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register