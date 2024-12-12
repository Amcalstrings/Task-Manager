import { UserContext } from "../App"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import TaskCard from "../assets/components/TaskCard"
import ProgressTracker from "../assets/components/ProgressTracker"
import Legend from "../assets/components/Legend"
import TypingEffect from "../assets/components/TypingEffect"

const Home = () => {
    const { tasks, filter, setFilter, searchQuery, setSearchQuery } = useContext(UserContext);

    // Define categories and state for active category
    const categories = ['All', 'Work', 'Personal', 'Fitness', 'Other'];
    const [activeCategory, setActiveCategory] = useState('All');
      const filteredTasks = tasks.filter((task) =>{

        const matchesCategory = activeCategory === 'All' || task.category == activeCategory;

        const matchesFilter = 
        filter === 'all' ||
        (filter === 'completed' && task.completed) ||
        (filter === 'pending'&& !task.completed);

        const matchesSearch = !searchQuery || 
        (task.title && typeof task.title === "string" && task.title.toLowerCase().includes(searchQuery.toLowerCase()))

        return matchesCategory && matchesFilter && matchesSearch  
      })

    
  return (
    <>
    
    <motion.div 
    className=" bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{opacity: 3, y: 0}}
    transition={{duration: 3}}
    >
      
        <h1 className="text-5xl font-bold mb-4 text-blue-600 " >Welcome to Task Manager</h1>
        <div className="text-lg text-gray-700 mb-8 dark:text-white italic">
          <TypingEffect text='Organize your tasks efficiently, and track your progress in one place.' delay={100}/>
        </div>
        <p className="text-lg dark:text-white">Do you have a new task?</p>
        <Link to="/tasks" 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg shadow-lg hover:bg-blue-600 transition dark:text-white">
          Add Task </Link>
          <p className="text-lg dark:text-white">Search existing tasks below?</p>
        <div className="flex justify-between mb-5">
          <input type="text" 
            placeholder="Search tasks"
            value={searchQuery}
            onChange={(e) =>setSearchQuery(e.target.value)}
            className="border p-2 rounded mr-3"/>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <Legend />
        <div className="flex space-x-4 mb-4">
          {categories.map((cat) =>
          (
            <button
            key={cat}
            onClick={ () => setActiveCategory(cat)}
            className={`px-4 py-2 rounded ${activeCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >{cat}</button>
          ))}
        </div>
          {filteredTasks.length > 0 ? ( <>
            <p className="text-lg dark:text-white">Track your task completion progress below?</p>
            <ProgressTracker />
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-gray-900 ">
          
          {filteredTasks.map((taskItem) =>(
            <motion.div 
            key={taskItem.id}
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-20 }}
            transition={{ duration: 0.4 }}
            >
              <TaskCard key={taskItem.id} task={taskItem}/> 
            </motion.div>
          ))}  
          
        </div>
        </>)
        : (<div className="text-center text-gray-500 text-2xl col-span-full dark:text-white">No task to display. Click on the 'Add task' button above to get started </div>)}
    </motion.div>
    
    
    
    </>
  )
}

export default Home
