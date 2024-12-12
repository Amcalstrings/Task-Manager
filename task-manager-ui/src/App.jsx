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
  const baseURL = import.meta.env.VITE_API_BASE_URL
  // fetch tasks from backend
  useEffect(() =>{
    const fetchTasks = async() =>{
      const response = await fetch(`${baseURL}/api/tasks/`);
      const data = await response.json();
      setTasks(data)
    };
    fetchTasks();

  }, [])

    
  return (
    <BrowserRouter >
      <UserContext.Provider value={{tasks, setTasks, filter, setFilter, searchQuery, setSearchQuery}}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/tasks' element={<TaskPage />}/>
          </Route>
        </Routes>
      </UserContext.Provider>  
    </BrowserRouter>
  )
}

export default App
