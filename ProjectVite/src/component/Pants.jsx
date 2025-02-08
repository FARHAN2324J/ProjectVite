import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';


export default function Pants() {
    const [items] = useState([
      {id: 1, image: '/src/imgPants/6.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$180'},
      {id: 2, image: '/src/imgPants/2.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$150'},
      {id: 3, image: '/src/imgPants/3.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$130'},
      {id: 4, image: '/src/imgPants/4.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$140'},
      {id: 5, image: '/src/imgPants/5.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$160'},
      {id: 6, image: '/src/imgPants/1.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$200'},

    ])
    return (
        <div>
            <div className='flex  px-10 py-5 gap-5'><Link to="/"><span className='text-gray-700'>Home</span></Link> <span className='text-gray-700'>/</span> <Link><span className='text-gray-950'>Pants</span></Link></div>
            <div className='p-20'>
        <div className='flex justify-between b'>
          <h1 className='text-3xl font-semibold text-[#0C0C0C]'>Best Sellers</h1>
          <span className='text-sm text-[#5A6D57] cursor-pointer'>View All</span>
        </div>
        <div className='flex gap-8 justify-between py-5  flex-wrap'>
          {items.map(item => (
            <div key={item.id} className='w-[30%]'>
            <div className='relative'>
              
              <img src={item.image} alt="" />
            </div>
            <h1 className='py-2 font-bold text-base'>{item.title}</h1>
            <div className='flex justify-between my-2'>
              <span className='font-normal text-base'>{item.description}</span>
              <span className='font-bold'>{item.price}</span>
            </div>
            <div className='flex gap-2'>
              <span className='cursor-pointer w-5 h-5 bg-[#0C0C0C] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#7DC3EB] rounded-[50%]'></span>
              <span className='cursor-pointer w-5 h-5 bg-[#748C70] rounded-[50%]'></span>
            </div>
          </div>
          ))}
        
        </div>
        
        
        
      </div>
      <Footer/>
      </div>
    )
}