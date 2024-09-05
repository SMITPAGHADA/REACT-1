import firebase from 'firebase/compat/app';

import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import {  auth, firestore } from '../../firebaseConfig';

export default function Dashbord() {
  useEffect(()=>{
    fetchUser()
  },[])
const[user1,setUser1]=useState("")
  const fetchUser= async()=>{
    let user=auth.currentUser;
    // console.log(user.uid)
    let data=await getDoc(doc(firestore,"user",user.uid))
    console.log(data.data());
    setUser1(data.data());
  }
  return (
    <div>{user1.fname}</div>
  )
}
