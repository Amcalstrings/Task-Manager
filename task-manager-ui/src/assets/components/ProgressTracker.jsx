import { useContext } from 'react';
import { UserContext } from '../../App';


const ProgressTracker = () => {
    const { tasks} = useContext(UserContext)
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length

    const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
  return (
    <div className='mb-4'>
        <p className='text-lg text-gray-700 dark:text-white'>
            {`${completedTasks} out of ${totalTasks} completed`}
        </p>
        <div className='w-full bg-gray-200 rounded-full h-6 mt-6'>
            
            <div className='bg-blue-500 h-6 rounded-full text-white flex items-center justify-center'
            style={{ width: `${progressPercent}%` }}>
                {progressPercent}%
            </div>
        </div>
    </div>
  )
}

export default ProgressTracker