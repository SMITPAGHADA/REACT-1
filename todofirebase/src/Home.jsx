import React, { useEffect, useState } from 'react'
import { firestore } from '../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { MdDelete } from "react-icons/md";

import { MdEditDocument } from "react-icons/md";

function Home() {
    const [name,setName]=useState('')
  
    const[email,setEmail]=useState('')
    const[lname,setLname]=useState('')
    const[record,setRecord]=useState(null)
    const[editindex,seteditIndex]=useState(null)

    useEffect(()=>{
    fetchdata();
    },[])

    const fetchdata= async()=>{
   let querysnapshot= await getDocs(collection(firestore,"users"))
   console.log(querysnapshot)
   let alldata=querysnapshot.docs.map((doc)=>({docId:doc.id,...doc.data()}))
   setRecord(alldata)
    }

    const handleEdit= async(index)=>{
        let maindata =record[index];
        setName(maindata.name)
     
        setEmail(maindata.email)
        setLname(maindata.lname)
       seteditIndex(index)
    }


    const handleDelete= async(index)=>{
     await  deleteDoc(doc(firestore,"users",record[index].docId))  
     let remainingdata=record.filter((e,i)=>i!==index)
     console.log(remainingdata) 
     setRecord(remainingdata)

    }
    const handelSubmit= async()=>{

        if(editindex===null || editindex <0){
            console.log("Please select"+editindex)
            await addDoc(collection(firestore,"users"),{
                name,lname,email
             })  
        }else{
         await updateDoc(doc(firestore,"users",record[editindex].docId),{
            name,lname,email
         })   
        }
   setName("")
setEmail("")
setLname("")
   seteditIndex(null)
   fetchdata(   )
    }
  return (
    <>
    <img src="" alt="" />
    <div className='bg-[white] border ms-[230px] mt-[50px] w-[70%] h-[50px] flex justify-center items-center '>
        <h1 className='text-[25px] font-semibold '>My Todo List</h1>
    </div>
    <div className=' w-[67%] none ms-[255px] h-[40px]'></div>

      <div className=' bg-[white] border ms-[230px] mt-[px] first ' >
        
        <div className='flex w-[95%]  justify-around items-center mt-7 h-[80px] border mx-6 px-3  main'>
        <input type="text" placeholder='Enter Youre Name' className='bg-[#dfe0e249] border px-3  py-1  w-[290px] h-[35px]' onChange={(e)=>setName(e.target.value)} value={name} />
        <input type="text" placeholder='Enter Youre Last Name' className='bg-[#dfe0e249] border  px-3 py-1 w-[290px] h-[35px]'  onChange={(e)=>setLname(e.target.value)} value={lname}/>
        
        <input type="text" placeholder='Enter Youre Email' className='bg-[#dfe0e249] border   px-3 py-1 w-[290px] h-[35px] '   onChange={(e)=>setEmail(e.target.value)} value={email}/>
       
        <button className='bg-[#DFE4F8] px-5 py-1 h-[35px] hover:bg-[#c7d0f2] duration-1000  ' onClick={handelSubmit}>{editindex===null?"SUBMIT":"UPDATE"}</button>
 
        </div>
<div className='flex w-[95%]  h-auto  justify-around  mt-[60px] mx-6'>
<table className=' ' >
    <thead className='w-full h-[40px] mt-10     '>
        <tr className='w-full bg-[#ced6f5a8] '>
            
            <th className=' w-[290px]  flex-col justify-center  ' >Name</th>
            <th  className=' w-[290px]  flex-col justify-center'>Last name</th>
            <th  className=' w-[280px]  flex-col justify-center'>Email</th>
          
            <th  colSpan={2}  className=' w-[400px]  flex-col justify-center'>Action</th>
        </tr>
    </thead>
    <tbody className=' w-full '>
        {
            record?
            record.map((e,i)=>{
                return <tr key={i}  className=' bg-[#ced6f5ae]    '>
                    <td className=' border  border-b-[#0000000e]    border-r-[#0000000e]  border-l-[#0000000e] border-t-[#0000000e] ms-2 text-[18px] '>{e.name}</td>
                    {/* <td>{e.sub}</td> */}
                    <td className='border border-r-[#0000000e] border-b-[#0000000e]   border-t-[#0000000e]  text-[18px]'>{e.lname}</td>
                    <td className='border border-r-[#0000000e] border-b-[#0000000e]  border-t-[#0000000e] text-[18px] '>{e.email}</td>
                   
                    <td  className='border border-r-[#0000000e] border-b-[#0000000e]  border-t-[#0000000e] bg-[#F8B7AD]  text-center text-[25px] btn'><button onClick={() => handleEdit(i)}><MdEditDocument /></button></td>
                    <td className='border border-r-[#0000000e] border-b-[#0000000e]  border-t-[#0000000e]   bg-[#F8B7AD] text-[25px] text-center btn'><button onClick={() => handleDelete(i)}><MdDelete /></button></td>
                </tr>       
            })
            :<p>loding ho</p>
        }
    </tbody>
</table>
</div>

 <div className=''>
  
 </div>
    </div></>
  
    

  )
}

export default Home