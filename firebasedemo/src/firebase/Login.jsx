import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const[mail,setMail]=useState("")
    const[pass ,setPass] = useState("")

    const navigate=useNavigate();

    const singup=(()=>{
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((user)=>{
          console.log(user)
          navigate('/dashbord')
        }).catch(((err)=>{
console.log(err)    
        }))
        
    })
  return (
    <div>

<input type="text" placeholder='Enter youre Email' onChange={(e)=>setMail(e.target.value)} />
        <input type="text" placeholder='Enter youre password'  onChange={(e)=>setPass(e.target.value)} />
        <button onClick={singup}>Log in</button>
        <Link to="/Singup">Sing up</Link>
    </div>
  )
}
