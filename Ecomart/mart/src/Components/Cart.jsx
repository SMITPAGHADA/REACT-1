import React, { useState } from "react";

function Cart({ setimg, setimg1, setimg2, setimg3 }) {
  const [increment, setincrement] = useState(0);

  const up = () => {
    setincrement(increment + 1);
  };
  const down = () => {
    if (increment == 0) {
      return setincrement;
    } else {
      setincrement(increment - 1);
    }
  };

  const Cancel = () => {
    setincrement(0);
  };
  return (
    <div>

      <div className="w-[100%] h-[100px]  mt-2 flex justify-between items-center ">
        <img src="https://html.themewant.com/ekomart/assets/images/logo/logo-01.svg" alt="" className=" w-[] h-[] ms-5" />
        <img src="https://html.themewant.com/ekomart/assets/images/icons/bar-1.svg" alt="" className="w-[40px] h-[40px] me-5"/>
      </div>
      <div className=" w-[100%] h-[500px]  flex justify-around mt-10">
        <div className="w-[23%] h-[500px] border  bg-[#F5F6F7]">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3 ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">

<button className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={down}>
  -
</button>
<h5 className="mt-4">{increment}</h5>{" "}
<button className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={up}>
  +
</button>
<button onClick={Cancel} className="btn1 border w-[100px]" >Cancel</button>
</div>
          </div>
        </div>
        {/* btn2 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7]">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg1} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3  ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">

<button className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={down}>
  -
</button>
<h5 className="mt-4">{increment}</h5>{" "}
<button className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={up}>
  +
</button>
<button onClick={Cancel} className="btn1 border w-[100px]" >Cancel</button>
</div>
          </div>
        </div>
        {/* btn3 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7] ">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg3} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3  ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">
              <button
                className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={down}
              >
                -
              </button>
              <h5 className="mt-4">{increment}</h5>{" "}
              <button
                className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={up}
              >
                +
              </button>
              <button onClick={Cancel} className="btn1 border w-[100px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* btn4 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7] ">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg2} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3 ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">
              <button
                className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={down}
              >
                -
              </button>
              <h5 className="mt-4">{increment}</h5>{" "}
              <button
                className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={up}
              >
                +
              </button>
              <button onClick={Cancel} className="btn1 border w-[100px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>


      <div>
      <div className=" w-[100%] h-[500px]  flex justify-around mt-10">
        <div className="w-[23%] h-[500px] border  bg-[#F5F6F7]">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg3} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3 ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">

<button className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={down}>
  -
</button>
<h5 className="mt-4">{increment}</h5>{" "}
<button className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={up}>
  +
</button>
<button onClick={Cancel} className="btn1 border w-[100px]" >Cancel</button>
</div>
          </div>
        </div>
        {/* btn2 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7]">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg2} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3  ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">

<button className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={down}>
  -
</button>
<h5 className="mt-4">{increment}</h5>{" "}
<button className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={up}>
  +
</button>
<button onClick={Cancel} className="btn1 border w-[100px]" >Cancel</button>
</div>
          </div>
        </div>
        {/* btn3 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7] ">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg1} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3  ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">
              <button
                className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={down}
              >
                -
              </button>
              <h5 className="mt-4">{increment}</h5>{" "}
              <button
                className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={up}
              >
                +
              </button>
              <button onClick={Cancel} className="btn1 border w-[100px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* btn4 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7] ">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3 ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">
              <button
                className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={down}
              >
                -
              </button>
              <h5 className="mt-4">{increment}</h5>{" "}
              <button
                className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={up}
              >
                +
              </button>
              <button onClick={Cancel} className="btn1 border w-[100px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  */}

    <div>
      <div className=" w-[100%] h-[500px]  flex justify-around mt-10">
        <div className="w-[23%] h-[500px] border  bg-[#F5F6F7]">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg1} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3 ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">

<button className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={down}>
  -
</button>
<h5 className="mt-4">{increment}</h5>{" "}
<button className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={up}>
  +
</button>
<button onClick={Cancel} className="btn1 border w-[100px]" >Cancel</button>
</div>
          </div>
        </div>
        {/* btn2 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7]">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3  ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">

<button className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={down}>
  -
</button>
<h5 className="mt-4">{increment}</h5>{" "}
<button className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center" onClick={up}>
  +
</button>
<button onClick={Cancel} className="btn1 border w-[100px]" >Cancel</button>
</div>
          </div>
        </div>
        {/* btn3 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7] ">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src={setimg1} alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3  ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">
              <button
                className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={down}
              >
                -
              </button>
              <h5 className="mt-4">{increment}</h5>{" "}
              <button
                className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={up}
              >
                +
              </button>
              <button onClick={Cancel} className="btn1 border w-[100px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* btn4 */}
        <div className="w-[23%] h-[500px] border bg-[#F5F6F7] ">
          <div className="w-[100%] h-[300px]    flex justify-center items-center">
            <img src="https://html.themewant.com/ekomart/assets/images/grocery/06.jpg " alt="" className="w-[75%] h-[75%]" />
          </div>
          <div className="w-[100%]  h-[200px] ms-3 ">
            <h1 className="font-bold mt-1">
              Nestle Cerelac Mixed<br></br> Fruits & Wheat With Milk
            </h1>
            <p className="mt-2">500 kg</p>
            <h1 className="font-bold text-[red] mt-2">$36.00 </h1>
            <div className="flex justify-around  mt-2">
              <button
                className="text-[40px] btn1 border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={down}
              >
                -
              </button>
              <h5 className="mt-4">{increment}</h5>{" "}
              <button
                className="text-[30px] btn1  border w-[50px] h-[50px] rounded-[10%] flex justify-center items-center"
                onClick={up}
              >
                +
              </button>
              <button onClick={Cancel} className="btn1 border w-[100px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    // shcasca

    
  );
}

export default Cart;
