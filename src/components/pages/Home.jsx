import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-10 flex justify-center items-center'>
      <button className='bg-teal-500 p-2 rounded-lg text-white'>
        <NavLink to='/recipes'>Order Burger</NavLink>
      </button>
    </div>
  )
}

export default Home
