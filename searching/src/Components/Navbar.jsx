import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <Link to="/Product">Product</Link>
        <Link to="/Cart">Cart</Link>
    </div> 
  )
}

export default Navbar