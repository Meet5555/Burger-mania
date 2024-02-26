import React from 'react'
import {NavLink} from 'react-router-dom'
import {useTheme} from '../../contexts/themeContext'

const Navbar = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar flex h-[8vh] justify-between items-center p-5 bg-violet-400 text-white">
      <div className="logo">
        <NavLink to="/" className='text-purple-800 font-bold text-2xl hover:text-purple-600'>Burger Mania</NavLink>
      </div>
      <div className="nav-items flex items-center">
        <ul className='me-5 flex gap-5'>
          <li> <NavLink to='/recipes' className={({ isActive}) =>isActive ? "text-white font-bold" : "text-purple-800 hover:text-purple-600" }>Recipes</NavLink> </li>
          <li> <NavLink to='/orders'  className={({ isActive}) =>isActive ? "text-white font-bold" : "text-purple-800 hover:text-purple-600" }>Orders</NavLink> </li>
        </ul>
        <div className="mode-switch mt-2">
          <div className="checkbox-wrapper-5">
            <div className="check">
              <input id="check-5" type="checkbox" onChange={toggleTheme} checked={theme==='dark'}/>
              <label htmlFor="check-5"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
