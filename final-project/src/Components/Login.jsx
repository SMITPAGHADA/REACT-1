
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../firebaseConfig'
import Home from './Home'

function Login() {
    const [user, setUser] =useState(null)

    useEffect(()=>{
        let sub =onAuthStateChanged(auth,(currentuser)=>{
            if(currentuser){
                setUser(currentuser)
            }
        })
    },[])

    const handleLog= async()=>{
        let user  =await signInWithPopup(auth,provider)
        console.log(user)
        setUser(user.user)

    }
  return (
    <div>

        {
            user ?
            <div>
                <button onClick={handleLog}>LogIN</button>

            </div>:<Home/>
        }

    </div>
  )
}

export default Login