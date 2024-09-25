import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
 <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar