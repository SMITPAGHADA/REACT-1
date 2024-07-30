import React, { useState } from 'react'

function LocalStorage() {
const [todo,setTodo]=useState('')
const [tasks,setTasks]=useState([])

const HandelChange=(e)=>{
    setTodo(e.target.value)
}

const HandelSubmit=()=>{
 setTasks([...tasks,{name: todo}])
}

  return (
     <>
    <h1>fhirehfirehfiheir</h1>
     <input type="text" value={todo} onChange={HandelChange}  placeholder='Enter Value'/>
     <button onClick={HandelSubmit} >Submit</button>
    </>
  )
}

export default LocalStorage