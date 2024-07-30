import { useEffect } from "react"
import React ,{useState} from 'react'
function About() {
  
  const[todo,setTodo] =useState("")
  const [task,setTask]=useState([])
  const [editIndex,setIndex] = useState(-1)



  // update todo
  const updateTodo=()=>{

    let x =   JSON.parse(localStorage.getItem("todos"))

       if(x){

          x.splice(editIndex,1,{name:todo})
         setTask(x)
       }

       localStorage.setItem("todos",JSON.stringify(task))

       setIndex(-1)
       setTodo('')
   }

  // 

  // edit todo
  const editTodo =(name,index)=>{

    setTodo(name)
    setIndex(index)
  }
  // 

  const deleteTodo =(index)=>{
       
    const newTask = task.filter((el, i) => i !== index);
    setTask(newTask);

  }

  useEffect(()=>{
    let task= JSON.parse(localStorage.getItem('todos'));

    if(task){
      setTask(task)
      console.log(task);
    }
  },[])


  const handelChange=(e)=>{
    setTodo(e.target.value)
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(task))
  },[task,todo])

  return (
    <>

    <div className="second">
    <input type='text' value={todo} onChange={handelChange}></input>
    <button  onClick={updateTodo}  className="" >Update Todo</button>

    </div>
    <div className="list">
    <ul>
                {
                  task.map((el,index)=>{
                      return <div style={{display:"flex"}}>
                        <li>{el.name}</li>

                        <button onClick={()=>editTodo(el.name,index)}>Edit</button>
                        <button onClick={()=>deleteTodo(index)}>Delete</button>
                      </div>
                  })
                }
       </ul>
    </div>
       
    </>
  )
}

export default About