import React from 'react'

import { Route, Routes }  from 'react-router-dom'
import TasksPages from './pages/TasksPages'
import TasksForm from './pages/TasksForm'
import NotFound from './pages/NotFound'
import { TaskContextProvider } from './context/TasksProvider'

import Navbar from './components/Navbar'


function App  () {
  return (
    <div className='bg-zinc-900 h-screen'>
     <Navbar />
      <div className='container mx-auto px-20 '>
    <TaskContextProvider>
    
    <Routes>
      <Route path="/" element={<TasksPages />}/>
      <Route path="/new" element={<TasksForm />}/>
      <Route path="/edit/:id" element={<TasksForm />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </TaskContextProvider>
    </div>
  </div>
  )
}

export default App


