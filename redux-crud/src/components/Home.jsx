import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    const[todo, SetTodo]=useState("")
    const tasks=useSelector((state)=>state.tasks)

    const dispatch =useDispatch()


    const handelChnge=(e)=>{
        SetTodo(e.target.value)
    }
    const handelSubmit=()=>{
        if(todo){
dispatch(addTodo({id}))
        }
    }
  return (
    <div>
        <input type="text" placeholder='enter a value' onChange={handelChnge} />
        <button  onClick={handelSubmit} >submit</button>
    </div>
  )
}

export default Home