import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Navbar() {
        const [visibility, setVisibility] = useState({
      collection: false,
      newIn: false,
      plusSize: false,
      sustainability: false,
    });
  
    const [timeoutId, setTimeoutId] = useState(null);
  
    const handleMouseEnter = (item) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setVisibility((prev) => ({ ...prev, [item]: true }));
    };
  
    const handleMouseLeave = (item) => {
      const id = setTimeout(() => {
        setVisibility((prev) => ({ ...prev, [item]: false }));
      }, 100);
      setTimeoutId(id);
    };
  
    const handleContentMouseEnter = (item) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setVisibility((prev) => ({ ...prev, [item]: true }));
    };
  
    const handleContentMouseLeave = (item) => {
      const id = setTimeout(() => {
        setVisibility((prev) => ({ ...prev, [item]: false }));
      }, 10); 
      setTimeoutId(id);
    };

    return (
        <div>
            <header className='font-[Montserrat]'>
          <div className="text-center py-2 bg-[#5A6D57]">
            <span className='text-amber-50 font-[300] tracking-[.8px] text-[12px] '>Enjoy Free Shipping On All Orders</span>  
          </div>
  
          <div className="flex justify-between px-20 py-5 items-center container-header">
            <div className="header-logo">
              <div className='flex flex-col items-center'>
                <div className="flex justify-center items-center">
                  <span className='font-bold text-[#404040] text-[24px] sm:tracking-[3px] sm:text-[32px]'>modimal</span>
                  <img className="w-3" src="/src/img/photo_2025-01-31_09-43-00.jpg" alt="" />
                </div>
                <span className='font-normal sm:text-[10px] text-[7.5px] sm:tracking-[1px] text-[#404040]'>women clothing</span>  
              </div>
            </div>
  
            <div className="text-lg font-normal navbar-header sm:block hidden cursor-pointer">
                <ul className='flex gap-10'>
                  <li onMouseEnter={() => handleMouseEnter('collection')} onMouseLeave={() => handleMouseLeave('collection')}>
                    Collection
                  </li>
                  <li onMouseEnter={() => handleMouseEnter('newIn')} onMouseLeave={() => handleMouseLeave('newIn')}>New In</li>
                  <li>ModiWeek</li>
                  <li onMouseEnter={() => handleMouseEnter('plusSize')} onMouseLeave={() => handleMouseLeave('plusSize')}>Plus Size</li>
                  <li onMouseEnter={() => handleMouseEnter('sustainability')} onMouseLeave={() => handleMouseLeave('sustainability')}>Sustainability</li>
                </ul>
            </div>
  
            <div>
              <div className='flex gap-8 sm:text-2xl text-sm text-neutral-800 header-icons '>
                <a href=""><i className='fas fa-search'></i></a>
                <a className='sm:hidden block' href=""><i className='fas fa-search'></i></a>
                <a className='sm:block hidden' href=""><i className='font-medium fas fa-user'></i></a>  
                <Link to="/favorites">
                  <i className='far fa-heart'></i>  
                </Link> 
                <a href=""><i className='fas fa-shopping-bag'></i></a>  
              </div>
            </div>
  
          </div>   
        </header>
        <div className='relative'>
          {visibility.collection && (
            <div 
              className='flex justify-around bg-[#fff] absolute z-10 w-full h-[550px] ' 
              onMouseEnter={() => handleContentMouseEnter('collection')} 
            onMouseLeave={() => handleContentMouseLeave('collection')}
            >
              <div>
                <h1>Category</h1>
                <div className='flex gap-4 flex-col py-6 text-[#404040]'>
                  <span>Shop all</span>
                  <span>Boluses & Top</span>
                  <Link to="/pants" className="cursor-pointer">Pants</Link>
                  <span>Dresses & jumpsuits</span>
                  <span>Outwear & jackets </span>
                  <span>Pullovers</span>
                  <span>Tees</span>
                  <span>Shorts & Skirts</span>
                </div>
                
              </div>
              <div>
                <h1>Featured</h1>
                <div className='flex gap-4 flex-col py-6 text-[#404040]'>
                  <span>New in</span>
                  <span>Modiweek</span>
                  <span>Plus size</span>
                  <span>Best seller</span>
                </div>
              </div>
              
              <div>
                <h1>More</h1>
                <div className='flex gap-4 flex-col py-6 text-[#404040]'>
                  <span>Bundles</span>
                  <span>Occasion wear</span>
                  <span>Matching set</span>
                  <span>Suiting</span>
                </div>
              </div>
              
              <div className='flex gap-3'>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-26_21-06-45.jpg" alt="" />
                  <span>Blouses</span>
                </div>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-26_21-07-26.jpg" alt="" />
                  <span>Plus Size</span>
                </div>
              </div>
             
            </div>
          )}
           {visibility.newIn && (
            <div 
              className='flex justify-around bg-[#fff] absolute z-10 w-full h-[550px]' 
              onMouseEnter={() => handleContentMouseEnter('newIn')} 
            onMouseLeave={() => handleContentMouseLeave('newIn')}
            >
              <div>
                <h1>Category</h1>
                <div className='flex gap-4 flex-col py-6 text-[#404040]'>
                  <span>Shop all</span>
                  <span>Boluses & Top</span>
                  <Link to="/pants" className="cursor-pointer">Pants</Link>
                  <span>Dresses & jumpsuits</span>
                  <span>Outwear & jackets </span>
                  <span>Pullovers</span>
                  <span>Tees</span>
                  <span>Shorts & Skirts</span>
                </div>
                
              </div>
              <div>
                <h1>Trending</h1>
                <div className='flex gap-4 flex-col py-6 text-[#404040]'>
                  <span>Plus Size</span>
                  <span>Fall Collection</span>
                  <span>Modiweek</span>
                </div>
              </div>
              
              <div className='flex gap-3'>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_17-59-14.jpg" alt="" />
                  <span>Fall Collection</span>
                </div>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_17-59-57.jpg" alt="" />
                  <span>boluses</span>
                </div>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_18-00-23.jpg" alt="" />
                  <span>Dresses</span>
                </div>
              </div>
             
            </div>
          )}
          {visibility.plusSize && (
            <div 
              className='flex justify-around bg-[#fff] absolute z-10 w-full h-[550px]' 
              onMouseEnter={() => handleContentMouseEnter('plusSize')} 
              onMouseLeave={() => handleContentMouseLeave('plusSize')}
            >
              <div>
                <h1>Category</h1>
                <div className='flex gap-4 flex-col py-6 text-[#404040]'>
                  <span>Shop all</span>
                  <span>Boluses & Top</span>
                  <Link to="/pants" className="cursor-pointer">Pants</Link>
                  <span>Dresses & jumpsuits</span>
                  <span>Outwear & jackets </span>
                  <span>Pullovers</span>
                  <span>Tees</span>
                  <span>Shorts & Skirts</span>
                </div>
                
              </div>
              
              <div className='flex gap-3'>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_18-07-16.jpg" alt="" />
                  <Link to="/pants" className="cursor-pointer">Pants</Link>
                </div>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_18-07-32.jpg" alt="" />
                  <span>Dresses</span>
                </div>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_18-07-39.jpg" alt="" />
                  <span>Blouses</span>
                </div>
              </div>
             
            </div>
          )}
           {visibility.sustainability && (
            <div 
              className='flex justify-around bg-[#fff] absolute z-10 w-full h-[550px]' 
              onMouseEnter={() => handleContentMouseEnter('sustainability')} 
              onMouseLeave={() => handleContentMouseLeave('sustainability')}
            >
              <div>
                <h1>Sustainability </h1>
                <div className='flex gap-4 flex-col py-6 text-[#404040]'>
                  <span>Mission</span>
                  <span>Processing</span>
                  <span>Materials</span>
                  <span>Packaging</span>
                  <span>Product care</span>
                  <span>Our suppliers</span>
                </div>
              </div>
              
              <div className='flex gap-3'>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_18-09-31.jpg" alt="" />
                  <span>Pants</span>
                </div>
                <div className=' flex flex-col gap-5'>
                  <img className='h-[420px]' src="/src/img/photo_2025-01-27_18-09-39.jpg" alt="" />
                  <span>Dresses</span>
                </div>
              </div>
             
            </div>
          )}
          {/* ------NAVBAR--HOVER-END----- */}

        </div>
        </div>
    )
}