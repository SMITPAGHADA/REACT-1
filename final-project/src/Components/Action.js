export  const addeDelete=(id)=>{
   
  return{
        type:"delete",
    id
  }
  
}
export  const addedit=(id,text)=>{
   
  return{
        type:"text",
        payload:{id,text}
  }
 
 }