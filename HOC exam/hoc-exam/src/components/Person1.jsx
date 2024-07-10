import React from 'react'
import Combine from './Combine'

function Person1({count,handelclick, handeldecrement ,reset}) {
  return (
    <>
    <div className='border w-[20%] rounded-[10px]'>
        <div className='w-[100%]  border border-[red]'>
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw114df9d7/homepage/shopByCategory/fod-mangalsutra.jpg" alt=""   className='w-[100%] '/>
        </div>

        <div className='flex justify-around border w-[100%] mt-1'>
        <button onClick={ handeldecrement} className='bg-[#fffdfd0c] drop-shadow-sm py-1 px-1 border border-[#0000004a] w-[30px] mt-2'>-</button>
       <h1 className='text-[red] mt-2'> product {count}</h1>
       <button onClick={handelclick} className='bg-[#fffdfd0c] drop-shadow-sm py-1 px-1 border border-[#0000004a] w-[30px] mt-2'>+</button>

       <div className='border border-[black] w-[80px]  flex justify-center items-center '>
        <button onClick={reset}>Cancel</button>
       </div>
       </div>

    </div>
    {/*  */}
    <div className='border w-[20%]  '>
        <div className='w-[100%]  border border-[red]'>
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47b1df4b/homepage/shopByCategory/fod-earrings.jpg" alt=""   className='w-[100%] '/>
        </div>

        <div className='flex justify-around border w-[100%] mt-1'>
        <button onClick={ handeldecrement} className='bg-[#fffdfd0c] drop-shadow-sm py-1 px-1 border border-[#0000004a] w-[30px] mt-2'>-</button>
       <h1 className='text-[red] mt-2'> product {count}</h1>
       <button onClick={handelclick} className='bg-[#fffdfd0c] drop-shadow-sm py-1 px-1 border border-[#0000004a] w-[30px] mt-2'>+</button>

       <div className='border border-[black] w-[80px]  flex justify-center items-center '>
        <button onClick={reset}>Cancel</button>
       </div>
       </div>
       
     
    </div>
    {/*  */}
    

    </>
    
  )
}

export default Combine( Person1)