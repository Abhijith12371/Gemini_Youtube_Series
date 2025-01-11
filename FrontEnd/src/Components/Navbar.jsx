import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='flex justify-between align-middle bg-slate-800 text-white py-5 px-5 text-2xl shadow'>
      <h1 className='font-bold'>ChatGPT</h1>
      <div className="profile">
        <FaUserCircle/>
      </div>
    </nav>
  )
}

export default Navbar
