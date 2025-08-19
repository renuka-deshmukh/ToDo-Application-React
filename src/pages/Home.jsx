import React from 'react'
import TodoList from '../components/TodoList'

const Home = () => {
  return (
    <div>
        <h1 className='text-success text-center'>To Do Application </h1>
        <TodoList/>
    </div>
  )
}

export default Home