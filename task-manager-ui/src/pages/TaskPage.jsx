import { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import AddTask from '../assets/components/AddTask'
import TaskCard from '../assets/components/TaskCard'
import Legend from '../assets/components/Legend'
import TypingEffect from '../assets/components/TypingEffect'

const TaskPage = () => {
    const { tasks, setTasks } = useContext(UserContext)
    const baseURL = import.meta.env.VITE_API_BASE_URL
    useEffect(() =>{
        const fetchTasks = async() =>{
            try {
                const response = await fetch(`${baseURL}/api/tasks/`);
                if (response.ok){
                    const data = await response.json()
                    setTasks(data)
                }else{
                    console.error('failed to fetch tasks')
                }
            }
            catch(error){
                console.error(error)
            }
        }
        fetchTasks();
    }, [])
        
  return (
    <div className='p-6 dark:bg-gray-900 w-[90%] mx-[5%]'>
        <div className='text-2xl text-grey-400 font-bold text-center dark:text-white italic' >
            <TypingEffect text='Kindly enter your task(s) below' delay={100}/>
        </div>
        <AddTask />
        <Legend />
        <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
            {tasks.map((task) =>(
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    </div>
  )
}

export default TaskPage