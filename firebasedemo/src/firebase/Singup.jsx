import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, firestore } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'


export default function Singup() {

    const[mail,setMail]=useState("")
    const[pass ,setPass] = useState("")
    const[fname,setFname] = useState("")
    const[lname,setLname] = useState("")
    const[age,setAge] =useState("")
    const[sub,setSub] = useState("")

    const navigate=useNavigate();

    const singup=(()=>{
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((user)=>{
          console.log(user.user.uid)
          setDoc(doc(firestore,"users",user.user.uid),{
            fname,lname,age,sub,mail
          })
          navigate('/dashbord')
        }).catch(((err)=>{
console.log(err)    
        }))
        
    })
  return (
    <div>

<input type="text" placeholder='Enter youre first name' onChange={(e)=>setFname(e.target.value)} />
<input type="text" placeholder='Enter youre last name'  onChange={(e)=>setLname(e.target.value)} />
<input type="text" placeholder='Enter youre age' onChange={(e)=>setAge(e.target.value)} />
<input type="text" placeholder='Enter youre subject'  onChange={(e)=>setSub(e.target.value)} />
        <input type="text" placeholder='Enter youre Email' onChange={(e)=>setMail(e.target.value)} />
        <input type="text" placeholder='Enter youre password'  onChange={(e)=>setPass(e.target.value)} />
        <button onClick={singup}>sing up</button>
        <Link to="/login">Log in</Link>
    </div>
  )
}
