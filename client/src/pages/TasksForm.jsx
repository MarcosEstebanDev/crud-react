import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'

import { useTasks } from '../context/TasksProvider'
import { useParams, useNavigate } from 'react-router-dom'

function TasksForm(){

  const {createTask, getTask, updateTask} = useTasks()
  const [task , setTask] = useState({
    title:"",
    description:""
  })
  const params = useParams()
  const navigate = useNavigate()
  console.log(params)

useEffect(() => {

  const loadTask = async() =>{
    if(params.id){
      console.log('loading data')
    const task = await getTask(params.id)
    setTask({
      title: task.title,
      description: task.description,
    })
    }
  }

loadTask()
} ,[]);


  return (
    <div>

   
    <Formik
    initialValues={task}
    enableReinitialize={true}
    onSubmit={ async (values, actions)=>{
        console.log(values)

      if(params.id){
        await updateTask(params.id, values)
        navigate("/")
    }else{
        await createTask(values)
        navigate("/")
}
       setTask({
        title:"",
        description:""
       })
}}
    >
    {({handleChange, handleSubmit, values, isSubmitting})=>(
        <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-sm rounded-md mx-auto p-10 mt-10">
        
        <h1 className='text-xl font-bold uppercase text-center'>{params.id ? "Editar Tarea" : "Nueva Tarea"}</h1>
    <label className='block'>Titulo</label>
    <input className='px-2 py-1 rounded-sm w-full' type="text" name="title" placeholder='Write a title' onChange={handleChange} value={values.title}></input>
    <label className='block'>Descripcion</label>
    <textarea className='px-2 py-1 rounded-sm w-full' name="description" rows="3" placeholder='Write a description' onChange={handleChange} value={values.description}></textarea>
    <button className='bg-green-500 text-white w-full rounded-md block max-w-sm rounded-md p-3' type='submit' disabled={isSubmitting}>{isSubmitting ? "Guardando...":"Guardado"}</button>
    </Form>
    )}
    </Formik>
    </div>
  )
}

export default TasksForm
