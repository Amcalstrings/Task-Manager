import { useState, useContext } from 'react'
import { UserContext } from '../../App'
const AddTask = () => {
    const { setTasks } = useContext(UserContext)

    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('Low')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('Work')

    const baseURL = import.meta.env.VITE_API_BASE_URL
    const handleTask = async (e) =>{
        e.preventDefault();
        
        const newTask = {
            title, priority, due_date: dueDate, category, completed: false,
        }
        try{
            const response = await fetch(`${baseURL}/api/tasks/`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTask)
            });
            if (response.ok){
                const data = await response.json();
                setTasks((prev) => [...prev, data])
                setTitle('');
                setPriority('Low');
                setDueDate('');
                setCategory('Work')
            }
            else{
                console.error('failed to add task')
            }
            }
        catch(error){console.error(error)}
        
    }
  return (
    <form onSubmit={handleTask} className='mb-4 p-6 h-screen w-[60%] mx-auto'>

        <div className='mb-4 '>
            <label htmlFor='TaskTitle' className='block text-gray-700 mb-2 dark:text-white'>Task Title</label>
            <input 
            type="text" 
            placeholder='Add a new task'
            className='flex-grow border border-gray-300 rounded-l px-4 py-2 w-full'
            value={title}
            onChange={(e) =>setTitle(e.target.value)}
            required
            />
        </div>

        <div className='mb-4'>
        <label htmlFor='priority' className='block text-gray-700 mb-2 dark:text-white'>Priority</label>
        <select value={priority} 
        id="priority" 
        onChange={(e) =>setPriority(e.target.value)}
        className='w-full border rounded p-2'>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        </div>

        <div className='mb-4'>
        <label htmlFor='dueDate' className='block text-gray-700 mb-2 dark:text-white'>Due Date</label>
        <input type="date"  
        id='dueDate' 
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}/>
        </div>

        <div className='mb-4'>
        <label htmlFor='category' className='block text-gray-700 mb-2 dark:text-white'>Category</label>
        <select value={category} 
        id="category" 
        onChange={(e) =>setCategory(e.target.value)}
        className='w-full border rounded p-2'>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Fitness">Fitness</option>
            <option value="Other">Other</option>
        </select>
        </div>
        
        <button type='submit' 
        className='bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600'>
            Add Task
        </button>
    </form>
  )
}

export default AddTask