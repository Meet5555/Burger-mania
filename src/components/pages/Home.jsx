import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-[87vh] flex justify-center items-center bg-white dark:bg-gray-900'>
      <button className='bg-teal-500 p-2 rounded-lg text-white'>
        <NavLink to='/recipes'>Order Burger</NavLink>
      </button>
    </div>
  )
}

export default Home
