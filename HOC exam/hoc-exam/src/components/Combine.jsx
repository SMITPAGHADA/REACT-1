 
import { useState } from "react"


function Combine(Original) {
    function Newcombine(){
        const[count,setcount]=useState(0)
      
        const handelclick=()=>{
setcount(count+1)
        } 

        const handeldecrement=()=>{
            if(count>0){
                setcount(count-1)
            }else{
                alert('Count cannot be less than 0')
            }
        }

        const reset=()=>{

            setcount(count(0))
        }



        return<Original count={count} handelclick={handelclick}  handeldecrement={ handeldecrement} reset={reset}/> 
    }
  return Newcombine
}

export default Combine