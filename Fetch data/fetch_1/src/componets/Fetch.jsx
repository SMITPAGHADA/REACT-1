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
   <Fragment>
{
  data.map((el)=>{
 return<div key={el.id  }>
<ul >
 
  <li>{el.id}</li>
  <li>{el.title}</li>
 <img src={el.image} alt="" />
  <li>{el.price}</li>
  <li>{el.description}</li>
 
</ul>

 </div>
  })
}

   </Fragment>
  )
}

export default Fetch