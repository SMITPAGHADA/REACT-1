import React, { useContext } from 'react'
import { context } from './Home'

export default function About() {
    const name= useContext(context)
  return (
    <div>

        <h1>Footer</h1>

      <input type="text" value={name} />
    </div>
  )
}
