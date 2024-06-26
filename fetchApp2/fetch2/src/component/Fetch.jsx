import React, { useState,useEffect } from 'react'

function Fetch() {
;
    const[data,setData]=useState([])

    useEffect(()=>{

      const Datafetch=async()=>{
        let response= await fetch('https://jsonplaceholder.typicode.com/comments');
        let jsondata= await response.json();
        console.log(jsondata);
        setData(jsondata);
      }
      Datafetch();
         
       
       
    },[])

  return (
    <>
     {
      data.map((el,index)=>{
        return(
        
          <ul  key={index}>
            <div>
            <li> postID = {el.postId}</li>
            <li> id = {el.id}</li>
            <li> Name = {el.name}</li>
         
            <li> Eamil= {el.email}</li>
            <li> Body = {el.body}</li>
           <br></br>
           <hr />
            </div>
         
          </ul>
        
        
        )
      })
    }
   
    </>
   
  )
}

export default Fetch