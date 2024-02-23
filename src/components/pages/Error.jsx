import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center mt-8'>
      Oops, page not Found. <Link to={'/'} className='text-purple-800'>Go to HomePage</Link>
    </div>
  )
}

export default Error
