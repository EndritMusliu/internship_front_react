import React, { useState } from 'react';
import api from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { FaLock } from 'react-icons/fa';
import "./loginstyle.css";
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      alert('✅ Registration successful. Please login.');
      navigate('/login');
    } catch (err) {
      console.error("Registration Error:", err.response?.data);
      alert(`❌ Registration failed: ${err.response?.data?.error || "Something went wrong"}`);
    }
  };

  return (
    <div className='container'>
      <div className='centered-section'>
        <h2 className='title'>Create your account</h2>
      </div>

      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label htmlFor='username' className='form-label'>Username</label>
            <div className='input-group'>
              <IoIosMail className='input-icon' />
              <input
                id='username'
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='input-field'
                placeholder='Your username'
                required
              />
            </div>
          </div>

          {/* Password */}
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

          {/* Submit Button */}
          <button type='submit' className='submit-button'>Sign Up</button>
        </form>

        {/* Login Link */}
        <p className='link-text'>
          Already have an account?{" "}
          <Link to='/login'>Login here →</Link>
        </p>
      </div>
    </div>
  );
}
