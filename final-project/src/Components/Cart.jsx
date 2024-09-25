import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
// import foodData from '../db.json'

function Cart() {

    const[cart,setCart]=useState([])


    useEffect(()=>{
     const storeCart = localStorage.getItem('cart')
     if(storeCart){
      setCart(JSON.parse(storeCart)) || [];
     }
    },[])



  return (
    <>
       <Navbar/>
       <h1>Welcome to our Food Delivery App</h1>
    <div className=' w-[100%] flex flex-wrap justify-evenly'>
        {
            cart.map((el )=>{
                return <div className='  w-[20%] border' key={el.id}>
                     <img src={el.image} alt=""  className=" w-[200px] h-[200px]" />
                    <h1>{el.name}</h1>
                 <h1>{el.category}</h1>
                 <h1>{el.price}</h1>
                 <h1>{el.description}</h1>
                
                
                    {/* <button  onClick={()=>handleCart()}> add to cart</button> */}
                
                </div>
            })
        }
    </div></>
  )
}

export default Cart