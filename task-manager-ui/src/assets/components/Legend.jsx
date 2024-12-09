import React from 'react'

const Legend = () => {
  return (
    <div className='p-4 bg-gray-50 border border-gray-300 rounded mb-4'>
        <h4 className='font-bold mb-2 text-gray-800'>Legend:</h4>
        <ul className='list-disc pl-5'>
            <li className='mb-1'>
                <span className='inline-block w-4 h-4 mr-2 bg-yellow-100 border-yellow-500'></span>
                <span>Tasks due today</span>
            </li>
            <li>
                <span className='inline-block w-4 h-4 mr-2 bg-red-100 border-red-500'></span>
                <span>Overdue Tasks</span>
            </li>
            <li>
                <span className='inline-block w-4 h-4 mr-2 bg-green-100 border-green-500'></span>
                <span>Future Tasks</span>
            </li>
            <li>
                <span className='inline-block w-4 h-4 mr-2 bg-gray-100 border-gray-300'></span>
                <span>No Due Date</span>
            </li>
        </ul>
    </div>
  )
}

export default Legend