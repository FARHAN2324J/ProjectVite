import { useState } from "react";
import Navbar from "./Navbar";


function Farhan() {
    const [isRed, setIsRed] = useState(false);
    const toggleBackground = () => {
      setIsRed(!isRed);
    };
    const [isRed2, setIsRed2] = useState(false);
    const toggleBackground2 = () => {
      setIsRed2(!isRed2);
    };
    const [isRed3, setIsRed3] = useState(false);
    const toggleBackground3 = () => {
      setIsRed3(!isRed3);
    };
  
    return (
      <div className='font-[Montserrat]'>

        {/* ------------Navbar------------- */}
        <Navbar/>
        {/* ------------Navbar------------- */}

        {/* ------------MAIN------------- */}
        <img className='w-full cursor-pointer' src="/src/img/photo_2025-01-26_19-54-17.jpg" alt="" />
        <div className='p-20'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold text-[#0C0C0C]'>Best Sellers</h1>
            <span className='text-sm text-[#5A6D57] cursor-pointer'>View All</span>
          </div>
          <div className='flex gap-3 justify-between py-5'>
          <div className='w-[30%]'>
            <div className='relative'>
              <i onClick={toggleBackground} style={{color: isRed ? 'red' : 'white'}} className='absolute right-0 p-5 fas fa-heart'></i>
              <img src="/src/img/1.jpg" alt="" />
            </div>
            <h1 className='py-2 font-bold text-base'>Tailored Stretch</h1>
            <div className='flex justify-between my-2'>
              <span className='font-normal text-base'>Turn It Up Pants</span>
              <span className='font-bold'>$180</span>
            </div>
            <div className='flex gap-2'>
              <span className='cursor-pointer w-5 h-5 bg-[#0C0C0C] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#7DC3EB] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#748C70] rounded-[50%]'></span>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='relative'>
              <i onClick={toggleBackground2} style={{color: isRed2 ? 'red' : 'white'}} className='absolute right-0 p-5 fas fa-heart'></i>
              <img src="/src/img/2.jpg" alt="" />
            </div>
            <h1 className='py-2 font-bold text-base'>Technical Silk</h1>
            <div className='flex justify-between my-2'>
              <span className='font-normal text-base'>Make A Splash</span>
              <span className='font-bold'>$120</span>
            </div>
            <div className='flex gap-2'>
              <span className='cursor-pointer w-5 h-5 bg-[#909225] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#19418E] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#0C0C0C] rounded-[50%]'></span>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='relative'>
            <i onClick={toggleBackground3} style={{color: isRed3 ? 'red' : 'white'}} className='absolute right-0 p-5 fas fa-heart'></i>
              <img src="/src/img/3.jpg" alt="" />
            </div>
            <h1 className='py-2 font-bold text-base'>Cool Weave</h1>
            <div className='flex justify-between my-2'>
              <span className='font-normal text-base'>Anywhere Dress</span>
              <span className='font-bold'>$210</span>
            </div>
            <div className='flex gap-2'>
              <span className='cursor-pointer w-5 h-5 bg-[#D0A5EA] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#909225] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#748C70] rounded-[50%]'></span>
            </div>
          </div>
          </div>
          
          
        </div>
        <div className='p-20'>
          <h1 className='text-3xl font-semibold text-[#0C0C0C]'>Collection</h1>
          <div className='flex py-5 gap-5'>
            <div className='flex flex-col justify-between gap-5 '>
              <img className='cursor-pointer' src="/src/img/4.jpg" alt="" />
              <img className='cursor-pointer' src="/src/img/6.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-between'>
              <img className='cursor-pointer' src="/src/img/5.jpg" alt="" />
              <img className='cursor-pointer' src="/src/img/7.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* -------------------------------FARHAN--END------------------------------ */}
      </div>
    );
}
export default Farhan