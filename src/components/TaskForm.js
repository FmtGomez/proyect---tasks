import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTaks } from '../Features/Task/taskSlice';
import { useNavigate, useParams } from "react-router-dom";


export const TaskForm = () => {

  let id = 3

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks)
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    if (params.id) {
      dispatch(editTaks(task))
    } else {

      e.preventDefault();
      dispatch(addTask({
        ...task,
        id: id++
      }));
    }
    navigate("/")
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(el => el.id === params.id))
    }
  }, [params.id, tasks])

  return (
    <div className='bg-zinc-800 max-w-sm p-4'>
      <form onSubmit={handleSubmit}>
        <label className='block text-sm font-bold mb-2'>Tarea:</label>
        <input
          className='w-full p-2 rounded-md bg-zinc-600 mb-2'
          name='title'
          type="text"
          placeholder='title'
          onChange={handleChange}
          value={task.title}
          required
        />
        <label className='block text-sm font-bold mb-2'>Descripción:</label>
        <textarea
          className='w-full p-2 rounded-md bg-zinc-600 mb-2 resize-none'
          name="description"
          placeholder='description'
          onChange={handleChange}
          value={task.description}
          required
        ></textarea>
        <div className='flex justify-center'>
          <button className='w-full bg-indigo-600 px-2 py-2 rounded-md ' type='submit' >Save</button>
        </div>
      </form>
    </div>
  )
}
