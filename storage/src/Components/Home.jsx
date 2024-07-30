import React, { useEffect, useState } from 'react'


function Home() {

  const[todo,setTodo] =useState("")
  const[tasks,setTasks] = useState([])
 




  const handelChange=(e)=>{
    setTodo(e.target.value)
  }

  const handelSubmit=()=>{
    setTasks([...tasks,{name:todo}])
    setTodo("")
  }

  

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(tasks))
  },[tasks,todo])
  return (
    <div className="second">
       <input type='text' value={todo} onChange={handelChange}></input>
       <button  onClick={handelSubmit}>Submit</button>
       

    
       
    </div>
  )
}

export default Home