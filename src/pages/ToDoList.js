import React from 'react'
import ToDo from './ToDo'
import { useState, useEffect } from 'react'

const ToDoList = ({toDoList}) => {
  return (
    <div>
        {
            toDoList.map(todo =>{
                return <ToDo todo={todo}/>
            })
        }
    </div>
  )
}

export default ToDoList