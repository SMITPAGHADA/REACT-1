import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<>
<Link to="/">Home</Link>
<Link to ="/About">About</Link>
<Link to="/Local">Local</Link>
</> 
  )
}

export default Navbar