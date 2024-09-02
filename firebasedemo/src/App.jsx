import { useState } from 'react'


import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Singup from './firebase/Singup'
import Login from './firebase/Login'
import Dashbord from './firebase/Dashbord'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' Component={Singup}>
      </Route>
      <Route path='/login' Component={Login}>
      </Route>
      <Route path='/dashbord' Component={Dashbord}>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
