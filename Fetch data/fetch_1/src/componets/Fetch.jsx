import { useState,useEffect,Fragment } from "react"


function Fetch() {

const[data,setdata] = useState([]);

useEffect(()=>{
    const datafetch=(async()=>{
      let Response= await fetch("https://fakestoreapi.com/products");
      let jsondata= await Response.json();
      console.log(jsondata)
      setdata(jsondata);

    });datafetch()
},[])

  return (
   <div className="main flex w-[100%] h-[500px]">
{
  data.map((el)=>{
    
 return<div key={el.id}  className="w-[25%]">
  
  <ul>
  <img src={el.image} alt=""  className="main1 w-[100px] h-[100px]"/>
 
 <li> title = {el.title}</li>

 <li> price = {el.price}</li>
 <li> category = {el.category}</li>
 {/* <li> description = {el.description}</li> */}

</ul>
 


 </div>
  })
}

   </div>
  )
}

export default Fetch