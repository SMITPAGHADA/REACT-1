import React, {  useState,useEffect } from 'react'

function Product() {

const [data,setData]=useState([])

useEffect=(()=>{

  const Datafetch=async()=>{
    try{
   let smit= await fetch('https://fakestoreapi.com/products')
   let jsonData= await smit.json()
   console.log(jsonData)
   setData(jsonData);

  }catch(error){
    console.log("error")
  }
    }
    Datafetch();
    
},[])

  return (
    <>
   {
    data.map((el)=>{
      return (
        <div key={el.id}>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
        <img src={el.image} alt={el.title} />
        </div>
      )
 
    })
   }
    </>
  )
}

export default Product