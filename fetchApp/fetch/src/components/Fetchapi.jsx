import React, { useState,useEffect } from 'react'

function Fetchapi() {
   const[data,setdata] =useState([]);
   useEffect(()=>{
    const datafetch=async()=>{
           try {
            let response= await fetch("https://fakestoreapi.com/products")
            let jsonData=await response.json();
            console.log(jsonData);
            setdata(jsonData);
           } catch (error) {
            console.log(error);
           }
    }
    datafetch();
   },[])
  return (
    <>
     {
         data.map((el)=>{
            return  <>
               
              <h1>{el.title}</h1>
              <img src={el.image} alt="" />
              </>
         })
    }
    </>
   
  
   
  )
}

export default Fetchapi