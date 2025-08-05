import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:8081/auth/login', {username, password});
            localStorage.setItem('token', res.data.token);
            alert("Login successful");
            navigate("/dashboard");
        }catch(err){
            alert("Login failed");
        }
    }

  return (
    <div>
        <h1>Login page</h1>
        <form onSubmit={handleLogin}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login