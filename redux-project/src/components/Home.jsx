import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addeDelete, addedit, addtodo } from "../reducer/action";
import img from "./img/img1.avif";

function Home() {
  const [todo, setTodo] = useState("");

  const data = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const HandelSubmit = () => {
    dispatch(addtodo({ id: Date.now(), name: todo }));
  };

  const todoEdit = (id) => {
   let x= prompt("Please enter")
   if(x){
     dispatch(addedit( id, x ));
   }
  };    

  const todoDelete = (id) => {
    dispatch(addeDelete(id ));
  };

  return (
    <>
    <div className="w-[100%] h-[600px]  flex">

   
      {/*  */}
      <div className="main w-[50%] border border-[#d0cdcd]">
        <div className=" ">
        <div className=" text-center mt-[100px] ">
    <input
      type="text"
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      className="border px-10 py-2 font-medium "
    />
    <button onClick={HandelSubmit} className="bg-[#9CC1F8]  ml-1 px-10 py-2  text-[white] font-medium">Submit</button>

 
    <div className="flex-col items-center justify-center me-[125px] mt-3 ">
    {
     data?.map((el)=>{
        return<>
           <li className="">{el.name}</li>
           <button onClick={()=>todoEdit(el.id)} className="bg-[#9CC1F8]  ml-1 px-10 py-2  text-[white] font-medium">Edit</button>
           <button onClick={()=>todoDelete(el.id)} className="bg-[#9CC1F8]  ml-1 px-10 py-2  text-[white] font-medium">Delete</button>
        </>
     })
    }
  </div>
  </div>
        </div>




</div>


      {/*  */}
      <div className="second w-[50%] border border-[#d0cdcd] ">

<img src={img} alt="" />
</div>

    </div>

   
     
    </>
  );
}

export default Home;
