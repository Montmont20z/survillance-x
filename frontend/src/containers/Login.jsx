import React, { useState } from 'react'
import { FaVideo } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [ userId, setUserId ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const navigate = useNavigate();

  const login = () => {
    navigate('/');
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center' >
      <div className="bg-white h-96 w-80 flex flex-col items-center">
        <FaVideo size='6em' />
        <div className="flex font-inter text-3xl text-blue-950 font-semibold mb-6">Survillance X</div>
        <input 
          type='text'
          placeholder=' User Id'
          className='outline outline-slate-400 outline-1 w-56 h-7 m-2'
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <input 
          type='text'
          placeholder=' Password'
          className='outline outline-slate-400 outline-1 w-56 h-7 m-2'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {/* set on click */}
        {/* query db */}
        {/* validate user input */}
        <button className='bg-blue-500 text-white text-semibold text-2xl rounded-sm py-1 px-6 mt-6' onClick={login} >
          Login
        </button>

      </div>
    </div>
  )
}

export default Login
