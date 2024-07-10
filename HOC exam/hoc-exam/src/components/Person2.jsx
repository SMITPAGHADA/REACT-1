 import React from 'react'
import Combine from './Combine'
 
 function Person2({count,handelclick,handeldecrement,reset}) {
   return (
    <>
     <div className=' w-[20%] border'> 
     <div className='w-[100%]  border border-[red] object-cover bg-[black]'>
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwebf0313b/homepage/shopByCategory/fod-gold-coins.jpg" alt=""   className='w-[100%]  '/>
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
{/* sec2 */}
<div className=' w-[20%] border'> 
     <div className='w-[100%]  border border-[red] object-cover bg-[black]'>
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg" alt=""   className='w-[100%]  '/>
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
{/* 

*/}


 </>
   

   )
 }
 
 export default  Combine( Person2)