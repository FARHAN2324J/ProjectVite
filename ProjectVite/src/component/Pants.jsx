import { Link } from 'react-router-dom';



export default function Pants() {
    return (
        <div>
            <div className='text-center'><Link to="/"><span className='text-gray-700'>Home</span></Link> <span className='text-gray-700'>/</span> <Link><span className='text-gray-950'>Pants</span></Link></div>
            <div className='p-20'>
        <div className='flex justify-between b'>
          <h1 className='text-3xl font-semibold text-[#0C0C0C]'>Best Sellers</h1>
          <span className='text-sm text-[#5A6D57] cursor-pointer'>View All</span>
        </div>
        <div className='flex gap-8 justify-between py-5  flex-wrap'>
        <div className='w-[30%]'>
          <div className='relative'>
            
            <img src="/src/imgPants/6.jpg" alt="" />
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
            
            <img src="/src/imgPants/2.jpg" alt="" />
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
          
            <img src="/src/imgPants/3.jpg" alt="" />
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
        <div className='w-[30%]'>
          <div className='relative'>
          
            <img src="/src/imgPants/4.jpg" alt="" />
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
        <div className='w-[30%]'>
          <div className='relative'>
          
            <img src="/src/imgPants/5.jpg" alt="" />
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
        <div className='w-[30%]'>
          <div className='relative'>
          
            <img src="/src/imgPants/1.jpg" alt="" />
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
        </div>
    )
}