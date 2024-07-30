import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='main'>

  <Link to='/Home' className='link'>Home</Link>
        <Link to='/About' className='link'>About</Link>
        <Link to='/Contacts'className='link'>Contacts</Link>
    </div>
  )
}

export default Navbar