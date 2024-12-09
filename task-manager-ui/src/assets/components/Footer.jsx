import React from 'react'

const Footer = () => {
  return (
    <div className='relative bottom-0 w-full'>
    <footer className='bg-gray-800 text-white text-center py-4 '>
      &copy; {new Date().getFullYear()} Task Manager. All rights reserved
    </footer>
    </div>
  )
}

export default Footer