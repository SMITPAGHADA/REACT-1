import { useState } from "react"


function Upchange( Original) {

    function Newcomponet(){
 const [count, setCount] = useState(0);
 const handleClick = () => {
   setCount(count + 1);
 } 
 return <Original count={count} handleClick={ handleClick}/>
    }
 return Newcomponet
}

export default Upchange