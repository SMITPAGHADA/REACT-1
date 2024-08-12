import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Product from './Product'
import Cart from './Cart'

function Allroutes() {
  return (
    
    
   <Routes>

     
     <Route path="/Product" element={<Product/>} />
     <Route path="/Cart" element={<Cart/>} />
     
   </Routes>
  )
}

export default Allroutes