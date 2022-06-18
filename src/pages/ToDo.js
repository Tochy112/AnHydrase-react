import React from 'react'

const ToDo = ({todo}) => {
    
  return (
    <div 
      className={todo.complete? 'strike':''}
      id = {todo.id} key = {todo.id+todo.task} name ="todo">{todo.task}
    </div>
  )
}

export default ToDo