import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  return (
    <header className='bg-blue-500 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Task Manager</h1>
        <nav>
          <Link to='/' className='mr-4 hover:underline'>Home</Link>
          <Link to='/tasks' className='hover:underline'>Tasks</Link>
        </nav>
        <DarkModeToggle />
      </div>
      
    </header>
  )
}

export default Navbar