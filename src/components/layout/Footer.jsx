import React from 'react'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer bg-violet-400 text-white py-2 h-[5vh]'>
     <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved Powered by Burger Mania </p> 
    </div>
  )
}

export default Footer
