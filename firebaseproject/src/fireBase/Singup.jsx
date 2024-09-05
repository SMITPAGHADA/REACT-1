import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import Aos from 'aos'

function Singup() {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
   
    useEffect(() => {
      Aos.init({
        duration: 600, // Duration of the animations (in ms)
        once: true, // Whether animation should happen only once while scrolling down
      });
    }, []);


    const Navigate= useNavigate("")

     const singUp=()=>{
     createUserWithEmailAndPassword(auth,email,password)
     .then((user)=>{
        console.log(user.user.uid)

      setDoc(doc(firestore,"users",user.user.uid),{
        email,password,fname,lname
      })
         Navigate("/dashbord")
        
     }).catch((error)=>{
       console.log(error)
     })
     }

  return (
    
    <>
    <div className='w-[60%]  h-[500px]   flex justify-around items-center ms-[20%] mt-[70px] frist'  >

      <div   data-aos="fade-right" className='main w-[50%] h-[100%] border border-[green] bg-[#fff] '>
        <h1 className='   ms-[35%] mt-[40px] text-[20px] font-bold'>Sing Up </h1>
 
      <input type='text' placeholder='Frist Name' className='bg-[#f4f2f29e] w-[85%] mt-[30px] ms-[7%]  px-[10px] py-[8px] ' onChange={(e)=>setFname(e.target.value)} ></input>
        <input type='text' placeholder='Last Name' className='bg-[#f4f2f29e] w-[85%] mt-[25px] ms-[7%]  px-[10px] py-[8px] '  onChange={(e)=>setLname(e.target.value)} ></input>
       
        
        <input type="text" placeholder=' Email' className='bg-[#f4f2f29e] w-[85%] mt-[25px] ms-[7%]  px-[10px] py-[8px]' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='password'className='bg-[#f4f2f29e] w-[85%] mt-[25px] ms-[7%]  px-[10px] py-[8px]' onChange={(e)=>setPassword(e.target.value)} />

        <div className='w-[85%]  mt-[25px] ms-[7%]  px-[10px] py-[8px] '>
        <button onClick={singUp} className='mr-[10%] px-[20px] py-[8px] bg-[#495997] hover:bg-[#2A3471] duration-1000 text-[white]'  >Sing up</button>
        <Link to={"/Login"} className='text-[blue]'>Log in</Link>
        </div>
 
      </div>
      <div   data-aos="fade-left" className='second   w-[50%] h-[100%] border border-[#43306e] bg-[#495997]'>
     <img src="https://cdni.iconscout.com/illustration/free/thumb/free-sign-up-form-illustration-download-in-svg-png-gif-file-formats--log-register-user-login-account-call-to-action-pack-design-development-illustrations-3798675.png?f=webp" alt="" />
      </div>

    </div>
    
    </>
  )
}

export default Singup