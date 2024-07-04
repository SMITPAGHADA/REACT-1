import { useRef } from "react"


function Form() {
      const nameRef = useRef(null)

      const emailRef = useRef(null)

      const passRef = useRef(null)
    const handelsubmit=(e)=>{
        e.preventDefault()
        alert(`${nameRef.current.value},${emailRef.current.value},${passRef.current.value}`)
    }
  return (
    <div className='w-[80%] h-[600px]  flex justify-between border mt-5 ml-11'>
    <div className='w-[60%]  h-[600px] drop-shadow '>
        <img src="https://img.freepik.com/free-vector/messenger-concept-illustration_114360-860.jpg?w=996&t=st=1720083326~exp=1720083926~hmac=e82acaf30680e6bfc8d0164e81a2aae34d69fb45e204ea4593b069ee702604d5" alt=""  className="w-[100%] h-[100%]"/>
    </div>
    <div className='w-[40%] h-[600px]  bg-[#f5f5f500] flex justify-around items-center  drop-shadow' >
    <form  onSubmit={handelsubmit} className="flex-col justify-around   w-[60%] h-[500px] py-11">
        
        <input type="text" className="w-[100%] px-1 py-2 drop-shadow rounded-[5px]" ref={nameRef} placeholder=" 👤 Enter youre name" />

        <input type="email" className="w-[100%] px-1 py-2 mt-5 drop-shadow  rounded-[5px]" ref={emailRef} placeholder=" ✉️ Enter youre email" />

        <input type="password" className="w-[100%] px-1 py-2 mt-5 drop-shadow rounded-[5px]" ref={passRef} placeholder=" 🔐 Enter youre password" />

        <input type="submit"  className="w-[100%] px-1 py-2 mt-5 text-center border drop-shadow "/>
         </form> 
    </div>

    </div>
  )
}

export default Form