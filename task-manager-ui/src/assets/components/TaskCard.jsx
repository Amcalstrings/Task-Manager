import React, { useContext } from 'react'
import { UserContext } from '../../App';


const getTaskClass = (due_date) =>{
  const today = new Date().toISOString().split("T")[0];
  if (due_date === today) return 'bg-yellow-100 border-yellow-500';
  if (new Date(due_date) < new Date()) return "bg-red-100 border-red-500";
  return "bg-green-100 border-green-500"
}


const TaskCard = ({task}) => {
  const { tasks, setTasks, } = useContext(UserContext)
  // toggle completed tasks
  console.log(task)
  const toggleComplete = async() =>{
    try{
      const response = await fetch(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({completed: !task.completed})
      })
      if (response.ok){
        setTasks(
          tasks.map((taskItem) =>
          taskItem.id === task.id ? {...taskItem, completed: !taskItem.completed} : taskItem
          )
        )
      }
    }catch(error){
      console.error(error)
    }
  }
  // delete tasks
  const deleteTask = async () =>{
    try{
      const response = await fetch(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
        method: 'DELETE'
      })
      if (response.ok){
        setTasks(tasks.filter((taskItem) => 
        taskItem.id !== task.id))
      }
    }catch(error){
      console.error(error)
    }
  }
  return ( 
    <div className={`p-4 rounded shadow-md mb-4 ${task.due_date ? getTaskClass(task.due_date) : 'bg-gray-100'}`}>
        <h3 className='text-lg font-semibold mb-2'>
          {task.title}
          {task.completed && (
            <span className='ml-2 text-green-600 font-bold'>(Completed)</span>
          )}
        </h3>

        <p className='text-sm'>
          <strong>Priority: </strong><span className='capitalize'>{task.priority}</span>
        </p>

        <p className='text-sm text-gray-900'>
          <strong>Due Date: </strong>{task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No Due Date'}
        </p>

        <p className='text-sm'>
          <strong>Category: </strong>{task.category}
        </p>

        <div className='flex justify-between mt-4'>
          <button
          onClick={toggleComplete}
          className={`px-4 py-2 mr-2 rounded ${task.completed ? 'bg-gray-400 text-white hover:bg-gray-500' : 'bg-green-500 text-white hover:bg-green-600'}` }>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
          </button>

          <button 
          onClick={deleteTask}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Delete Task</button>

        </div>
    </div>
  )
}

export default TaskCard