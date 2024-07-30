import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'
import Home from './Home'

function Allroutes() {
  return (
   
    <Routes>
        <Route  path='/Home' element={<Home/>}>Home </Route>
        <Route  path='/About' element={<About/>}>About </Route>
        <Route  path='/Contacts' element={<Contacts/>}>Contacts </Route>
    </Routes>
  )
}

export default Allroutes