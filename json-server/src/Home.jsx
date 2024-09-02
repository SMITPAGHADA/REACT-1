import React, { useEffect, useState } from 'react'

function Home() {

const [record,setRecord]=useState(null)
    useEffect(() => {

fetch("http://localhost:5000/posts")
.then(response=>response.json())
.then(data=>setRecord(data))

    },[])


    const addData=()=>{

      let data={"title": "new title", "views": 300 }
      fetch("http://localhost:5000/posts",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(data=>setRecord([...record,data]))
    }

    const delData=(id)=>{
      fetch("http://localhost:5000/posts",{
        method:"DELETE",
      })
         .then(()=>{
        let remain=record.filter((item)=>item.id !== id);
        setRecord(remain)
      })
    }
  return (
    <div>
      <h1>json server</h1>
      {
        record
        ?
        record.map((e,i)=>{
        return<div key={i}>

          <p>{e.id}</p>
          <p>{e.title}</p>
          <p>{e.views}</p>
          <button onClick={()=>delData(e.id)}>Delete-</button>
          </div>
        })
        :
        <h1>loding....</h1>
      }
      <button onClick={addData}>addData++</button>
     
      </div>
  )
}

export default Home