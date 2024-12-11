import React, { useContext } from 'react'
import { UserContext } from '../../App'

const TaskItem = ({task}) => {
    const { setTasks, } = useContext(UserContext);
    const baseURL = import.meta.env.VITE_API_BASE_URL
    // toggle completed tasks
    const toggleCompleteTask = async() => {
        const updatedTask = {...task, completed: !task.completed};
        await fetch(`${baseURL}/api/tasks/${task.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedTask),
        });
        setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? {...t, completed: !t.completed} : t)))

    }

    const deleteTask = async() =>{
        await fetch(`${baseURL}}/api/tasks/${task.id}/`, {
            method: "DELETE",
        });
        setTasks((prev) => prev.filter((t) => t.id !== task.id))
    }
  return (
    <div className='flex justify-between items-center border-b py-2'>
        <div className='flex items-center'>
            <input 
            type="checkbox"
            checked={task.completed}
            onChange={toggleCompleteTask}
            className='mr-2'
            />
            <span className='task.completed ? line-through : ""'>{task.title}</span>
        </div>
        <button onClick={deleteTask} className='text-red-500 hover:underline'>Delete</button>
    </div>
  )
}

export default TaskItem