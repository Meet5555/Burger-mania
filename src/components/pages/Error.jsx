import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
      Oops, page not Found. <Link to={'/'}>Go to HomePage</Link>
    </div>
  )
}

export default Error
