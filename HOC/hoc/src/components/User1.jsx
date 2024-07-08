import React from 'react'
import Upchange from './Upchange'

function User1({count, handleClick}) {
  return (
    <div>

    <h1> effrfr{count}</h1>
    <button onClick={handleClick}> increment1</button>
</div>
  )
}

export default Upchange(User1)