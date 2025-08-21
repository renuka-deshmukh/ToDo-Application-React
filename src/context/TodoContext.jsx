import React, { createContext, useEffect, useReducer } from 'react';
import {initialState, reducer} from '../reducer/TodoReducer';

const TodoContext = createContext()

const TodoProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialState , (init)=> {
    try{
   const todoFromLocal = JSON.parse(localStorage.getItem('todos'));
    return todoFromLocal ? todoFromLocal : init;
    } catch {
        return init;
    }
   })

   useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(state));
   }, [state]);

  return (
<TodoContext.Provider value={{state, dispatch}}>
{children}
</TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}