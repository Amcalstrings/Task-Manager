import { useState, useEffect, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './assets/components/Layout'
import './App.css'
import Home from './pages/Home'
import TaskPage from './pages/TaskPage'


export const UserContext = createContext(null)
function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all')
  
  // fetch tasks from backend
  useEffect(() =>{
    const fetchTasks = async() =>{
      const response = await fetch("http://127.0.0.1:8000/api/tasks/");
      const data = await response.json();
      setTasks(data)
    };
    fetchTasks();

  }, [])

    // filter tasks to determine if they are completed
    const filteredTasks = tasks.filter((task) =>{
      if (filter === 'completed'){return task.completed};
      if (filter === 'pending'){return !task.completed};
      return true;
    })
    console.log(filteredTasks)
    // search tasks
    const searchedTasks = filteredTasks.filter((task) =>
    task.title && typeof task.title === "string" && task.title.toLowerCase().includes(searchQuery.toLowerCase()))
  return (
    <BrowserRouter >
      <UserContext.Provider value={{tasks, setTasks, filter, setFilter, searchQuery, setSearchQuery}}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home task={searchedTasks}/>}/>
            <Route path='/tasks' element={<TaskPage />}/>
          </Route>
        </Routes>
      </UserContext.Provider>  
    </BrowserRouter>
  )
}

export default App
