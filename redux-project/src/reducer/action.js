
export  const addtodo=(todoData)=>{
    console.log(todoData)
 return{
       type:"add",
       payload:todoData
 }

}


export  const addedit=(id,text)=>{
   
 return{
       type:"text",
       payload:{id,text}
 }

}


export  const addeDelete=(id)=>{
   
    return{
          type:"delete",
      id
    }
   
   }