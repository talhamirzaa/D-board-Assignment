import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";



export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  let navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation logic
    const usernameRegex = /^[a-z0-9]+$/; 
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; 

    if (!usernameRegex.test(username)) {
      setError('Username must be lowercase and alphanumeric.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters long and contain at least one special character.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    let path = `/Dashboard`; 
    navigate(path,{state:{uname:username}});
    
  };

  return (
    <div>
      <div className="flex items-center justify-center mx-2 min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-1">Sign Up</h2>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full"
                placeholder='Email'
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ?   <IoEyeSharp /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="mb-4 relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full"
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ?  <IoEyeSharp /> : <FaEyeSlash />}
              </button>
            </div>
            <button type="submit" className="w-full p-2 mt-4 text-white bg-yellow-600 rounded-full hover:bg-yellow-700">Sign Up</button>
          </form>
          <div className="mt-4 text-center">
            <p>Already have an account? <Link to="/" className="text-blue-600">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
