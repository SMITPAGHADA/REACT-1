import React, { useState } from 'react'

function Form() {


    const [formData,setformData]=useState({
        name: '',
        email: '',
        
   
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("from submitted") 
    }
    const  handleChange=(e)=>{
  const {name,value} = e.target
  setformData({
    ...formData,[name]:value
})
 }
  const reset=()=>{
    setformData({name:'',email:''})
    alert("reset data") 
  }
  return (
 <div className='main'>

 <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" name="name" value={formData.name} onChange={handleChange} className='in1'/>
    </label>
    <br />
    <label>
      Email:
       <input type="text" name="email" value={formData.email} onChange={handleChange} className='in2' />
    </label>

    <br />
    <input type="submit" value="Submit"className='in3' />
    <button onClick={reset}>Reset</button>
 
 </form>
 </div>
  )
}

export default Form