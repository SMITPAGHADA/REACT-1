
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Singup from './fireBase/Singup'
import Login from './fireBase/Login'
import Dashbord from './fireBase/Dashbord'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Singup}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/dashbord' Component={Dashbord}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
