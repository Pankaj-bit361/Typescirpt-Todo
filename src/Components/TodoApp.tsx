import React, { useEffect, useState } from 'react'
import { getTodos } from '../api'
import { Todo } from './constants'
import TodoInput from './TodoInput'
import Todoitem from './Todoitem'

const TodoApp = () => {
const [todos,setTodos]=useState([])

useEffect(()=>{

getTodos().then((res)=>{
    setTodos(res)
})

},[])


  return (
    <div>
      <TodoInput/>
      {/* {todos.map((item)=>{
        <Todoitem key={item.id} {...item}/>
      })} */}
    </div>
  )
}

export default TodoApp
