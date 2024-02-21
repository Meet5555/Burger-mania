import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-5 bg-violet-400 text-white">
      <div className="logo">
        <NavLink to="/" className='text-purple-800 font-bold text-2xl hover:text-purple-600'>Burger Mania</NavLink>
      </div>
      <div className="nav-items">
        <ul className='me-5 flex gap-5'>
          <li> <NavLink to='/recipes' className={({ isActive}) =>isActive ? "text-white font-bold" : "text-purple-800 hover:text-purple-600" }>Recipes</NavLink> </li>
          <li> <NavLink to='/orders'  className={({ isActive}) =>isActive ? "text-white font-bold" : "text-purple-800 hover:text-purple-600" }>Orders</NavLink> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
