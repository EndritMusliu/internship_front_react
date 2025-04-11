import React, { useState } from 'react';
import api from '../api';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { FaLock } from 'react-icons/fa';
import "./loginstyle.css"
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password }, { withCredentials: true });
      
      // Assuming response has a "user" object
      login(response.data.user); // Store user in auth context
      navigate('/');
    } catch (err) {
      console.error("Login Error:", err.response?.data);
      alert(`❌ Login failed: ${err.response?.data?.message || "Something went wrong"}`);
    }
  };

  return (
    <div className='container'>
            <div className='centered-section'>
                <h2 className='title'>Login to your account</h2>
            </div>
            <form onSubmit={handleSubmit} className='form-container'>
                <div>
                <label htmlFor='username' className='form-label'>Username</label>
                <div className='input-group'>
                <IoIosMail className='input-icon' />
                <input
                id='username'
                type='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='input-field'
                placeholder='you@example.com'
                required
                />
                </div>
                </div>

                <div>
                <label htmlFor='password' className='form-label'>Password</label>
                <div className='input-group'>
                <FaLock className='input-icon' />
                <input
                id='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='input-field'
                placeholder='••••••••'
                required
                />
                </div>
             </div>
             <button type='submit' className='submit-button'>Login</button>
            </form>
          </div>
  );
}