import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import Home from './pages/Home'
import About from './pages/About'
import { TodoProvider } from './context/TodoContext'
import TodoList from './components/TodoList'
import Footer from './components/Footer'


function App() {

  return (
    <BrowserRouter>
      <TodoProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createTask' element={<TodoForm />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/taskList' element={<TodoList />}></Route>
        </Routes>
        <Footer />
        </TodoProvider>
    </BrowserRouter>
  )
}

export default App
