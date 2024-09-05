import { getDoc,doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

function Dashbord() {
    const[user1,setUser1]=("")
      
    useEffect(()=>{
 let change=onAuthStateChanged(auth,(user)=>{
    if(user){
      fetchuser(user)
        setUser1(user)
       
    }
 })


    },[user1])

    const[userdata,setUserdata]=useState("")

    const fetchuser= async(user)=>{

        const data=await getDoc(doc(firestore,"users",user.uid))
        console.log(data.data());
        setUserdata(data.data());

    }

  return (
<>
<div className='w-[50%]  h-[400px]   flex justify-around items-center ms-[20%] mt-[70px] border '>
<h1 className='text-[white] text-[20px]'>FirstName :- {userdata.fname}</h1>
<h1 className='text-[white] text-[20px]'   >LatstName :- {userdata.lname}</h1>
<h1 className='text-[white]  text-[20px]'>Email :- {userdata.email}</h1>
</div>

</>

    
  )   
}

export default Dashbord