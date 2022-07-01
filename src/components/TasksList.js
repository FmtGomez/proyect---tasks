import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from '../Features/Task/taskSlice';
import { Link } from "react-router-dom"

export const TasksList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className='w-4/6' key={tasks.id}>
      <header className='flex justify-center items-center py-4 gap-2'>
        <h1 className='text-4xl'>{`Tareas ${tasks.length}`}</h1>
        <Link to="/create-task"
          className='bg-indigo-600 px-2 py-1 rounded-md text-2xl hover:scale-110 duration-500 '>
          Crear Tarea
        </Link>
      </header>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {
          tasks?.map(el => (
            <div key={el.id} className="bg-neutral-800 p-4 rounded-md">
              <div className='flex justify-between'>
                <h2>{el.title}</h2>
                <div className='flex gap-2'>
                  <Link
                    className=' bg-green-600 px-2 py-1 tex-4 rounded-md self-center'
                    to={`/edit-task/${el.id}`}>Editar Tarea</Link>
                  <button
                    className='bg-red-500 px-2 py-1 text-4 rounded-md self-center '
                    onClick={() => handleDelete(el.id)} >Eliminar</button>
                </div>
              </div>
              <p>{el.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

