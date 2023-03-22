import React, { useState } from 'react'
import { postTodo } from '../api'

const TodoInput = () => {

const [title,settitle]=useState<string>("")

const handlechnage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    settitle(e.target.value)
}

const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    postTodo(title)
    settitle("")
}

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='title'  onChange={handlechnage}/>
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoInput
