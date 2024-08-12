import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "../redux/Action";

function Home() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const changeIncrement = () => {
    dispatch(inc());
  };

  const changeDecrement = () => {
    dispatch(dec());
  };
  return (
    <div className="main">
      <div className="box  w-[100%] border text-center mt-11">
        <h1 className="mt-5 font-semibold "> COUNT :{ count}</h1>
        <button className="mt-5 bg-none bg-[gray] w-[100px] h-[40px] text-white" onClick={changeIncrement}>
          increment
        </button>
        <button className="mt-5 ms-4  bg-none bg-[gray]  w-[100px] h-[40px] text-white " onClick={changeDecrement} disabled={count==0} >
          decrement
        </button>
      </div>
    </div>
  );
}

export default Home;
