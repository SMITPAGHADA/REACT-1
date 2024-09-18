import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { auth, provider } from '../firebaseConfig'

function Login() {

    const [user,setUser]=useState("")


    useEffect(()=>{
 let sub= onAuthStateChanged(auth,(current)=>{
    if(current){
        setUser(current)
    }
 })
    },[])

    const handleLog= async()=>{
     let user =await signInWithPopup(auth,provider)
     console.log(user)
     setUser(user.user)
    }

  return (
    <div>

        {
            user ?
            <div> 
                <h1>Welcome</h1>
                <h1>{user.displayName}</h1>
                <h1>{user.email}</h1>
                <img src={user.photoURL} alt="" width="20%" />
            </div>
            :<button onClick={handleLog}>Loginnn</button>
        }
    </div>
  )
}

export default Login