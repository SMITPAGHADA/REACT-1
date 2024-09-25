
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Admin from './Components/Admin'
import Login from './Components/Login'

function App() {
 

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
