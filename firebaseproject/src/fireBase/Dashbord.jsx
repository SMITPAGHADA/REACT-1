import { getDoc,doc, addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

function Dashbord() {
    const[user1,setUser1]=useState(null)
    const [uname,setUname] =useState("")
    const [sub,setSub] =useState("")
    const[userdata,setUserdata]=useState("")
      
   const handleSubmit = async()=>{
      await addDoc(collection(firestore,"students"),{
       id:user.uid,
       name: uname,
       sub:sub
      });
      fetchuser("null");  
    }
    useEffect(()=>{
 let change=onAuthStateChanged(auth,(user)=>{
    if(user){
      fetchuser(user1)
        setUser1(user)
       
    }
 })




    },[user1])

  

    const fetchuser= async(user)=>{

        const data=await getDoc(doc(firestore,"users",user.uid))
        console.log(data.data());
        setUserdata(data.data());

    }

  return (
<>
<h1 className='mt-[140px] ms-[35%]  text-[35px] font-bold text-[white] drop-shadow-2xl'>  Welcome to {userdata.fname}'s Dashbord</h1>
<div  className='w-[90%] h-[450px] flex   items-center border   mt-[20px] ms-[40px] drop-shadow-2xl *:'>

<div  className='w-[30%]  h-[400px] ms-[50px] 
 bg-[#495997] flex justify-center items-center border'><img className='' src="https://www.milnbank.org.uk/wp-content/uploads/2023/07/Artboard-52-1.png" alt="" /></div>

<div    className='w-[70%]  h-[400px]    mr-[50px] bg-[#fff] '>
  
  <div className='inputfiled w-full h-[100px] border border-[black]'>

  <input type="text" placeholder='enter name' className='border' onChange={(e)=>setUname(e.target.value)} />
  <input type="text" placeholder='enter name' className='border' onChange={(e)=>setSub(e.target.value)} />

  <button onClick={handleSubmit}>Submit</button>
  </div>


</div>
</div>


</>

    
  )   
}

export default Dashbord