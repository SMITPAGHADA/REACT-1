
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")



    const Navigate= useNavigate("")

     const logIn=()=>{
     createUserWithEmailAndPassword(auth,email,password)
     .then((user)=>{
        console.log(user.user.uid)
        

         Navigate("/dashbord")
        
     }).catch((error)=>{
       console.log(error)
     })
     }
  return (
    <>
          
          {/* <input type="text" placeholder='Enter youre Email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder='Enter youre password' onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={logIn}>Log IN</button> */}
             <div className='w-[60%]  h-[500px]   flex justify-around items-center ms-[20%] mt-[70px] frist'  >

<div data-aos="fade-right"  className='main w-[50%] h-[100%]  bg-[#fff] '>
  <h1 className='   ms-[35%] mt-[40px] text-[20px] font-bold'>Log In </h1>


 
  
  <input type="text" placeholder=' Email' className='bg-[#f4f2f29e] w-[85%] mt-[25px] ms-[7%]  px-[10px] py-[8px]' onChange={(e)=>setEmail(e.target.value)}/>
  <input type="text" placeholder='password'className='bg-[#f4f2f29e] w-[85%] mt-[25px] ms-[7%]  px-[10px] py-[8px]' onChange={(e)=>setPassword(e.target.value)} />

  <div className='w-[85%]  mt-[25px] ms-[7%]  px-[10px] py-[8px] '>
  <button onClick={logIn} className='mr-[10%] px-[20px] py-[8px] bg-[#495997] text-[white]'  >Log In</button>
  <Link to="/" className='text-[blue] text-[13px]'>Don't have an account?Register</Link>

  </div>

</div>
<div data-aos="fade-left" className='second   w-[50%] h-[100%] border border-[#43306e] bg-[#495997]'>
<img src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-login-illustration-download-in-svg-png-gif-file-formats--sign-profile-account-security-technology-and-protection-pack-science-illustrations-4707996.png?f=webp" alt="" />
</div>

</div>

    </>
    
  )
}

export default Login
