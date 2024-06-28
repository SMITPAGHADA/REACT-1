import React, { useState } from 'react'

function Login() {
    const [data,setdata]=useState(false);

    const handelLogin=()=>{
        setdata(true);
    }
    const handelLogout=()=>{
        setdata(false);
    }
  return (
    <div className='main'>
        {
            data ?(
            <div >
            <h1>Login</h1>
            <button onClick={handelLogout}>Logout</button>
            </div>
            ) : (
                <div className='main1'>
                <h1>LogOut</h1>
                <button onClick={handelLogin}>Login</button>
                </div>
            )


        }
    </div>
  ) 
}

export default Login