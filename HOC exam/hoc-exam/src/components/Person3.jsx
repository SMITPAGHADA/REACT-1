import React from 'react'
import Person1 from './Person1'
import Person2 from './Person2'

function Person3() {
  return (
    <div className='w-full flex justify-around mt-4 w'>

        <Person1/>
        <Person2/>
       
    </div>
  )
}

export default Person3