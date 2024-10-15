import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";


export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate(); 
  const [username, setUsername] = useState('');
    const handleLogin = () => {

      let path = `/Dashboard`; 
      navigate(path,{state:{uname:username}});
    }

  return (
    <div className="flex items-center justify-center mx-2 min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-4">
      
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-full" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-4">
            
          <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full"
                placeholder='Password'
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
          </div>
          <button type="submit" className="w-full p-2 mt-4 text-white bg-yellow-600 rounded-full hover:bg-yellow-700">Login</button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600">Forgot Password?</a>
          <p className="mt-2">Don't have an account? <Link to="/register" className="text-blue-600">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
