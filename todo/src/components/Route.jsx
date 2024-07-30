import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import LocalStorage from './LocalStorage'


function Route() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/About" element={<About/>} ></Route>
      <Route path='/Local' element={<LocalStorage/>} ></Route>
    </Routes>
    </>
  )
}

export default Route