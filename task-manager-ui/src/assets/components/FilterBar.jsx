import React, { useState, useContext } from 'react'
import { UserContext } from '../../App'

const FilterBar = () => {
    const { filter, setFilter, searchQuery, setSearchQuery } = useContext(UserContext)
  return (
    <div className='flex justify-between mb-4'>
        <input 
        type="text" 
        placeholder='Search tasks..'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='flex-grow border border-gray-300 rounded px-4 py-2 mr-2'
        />
        <select 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className='border border-gray-300 rounded px-4 py-2'
        >
           <option value="all">All</option>
           <option value="completed">Completed</option>
           <option value="pending">Pending</option> 
        </select>
    </div>
  )
}

export default FilterBar