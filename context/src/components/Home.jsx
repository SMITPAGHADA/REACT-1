import React, { createContext, useState } from 'react'
import About from './About'


 export const context= createContext()
export default function Home() {
    const [data,setdata]=useState("")
  return (
    <>
    
    <div>
<input type="text" value={data} onChange={(e)=>setdata(e.target.value)} />

    </div>
    <context.Provider  value={data}>
<About/>
    </context.Provider>
    </>
  

  )
}
