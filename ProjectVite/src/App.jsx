import { useState } from 'react';
import './App.css';

function App() {
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
    <div className='font-[Montserrat]'>
      {/* -------HEADER--------- */}
      <header className='font-[Montserrat]'>
        <div className="text-center py-2 bg-[#5A6D57]">
          <span className='text-amber-50 font-[300] tracking-[.8px] text-[12px] '>Enjoy Free Shipping On All Orders</span>  
        </div>

        <div className="flex justify-between px-20 py-5 items-center container-header">
          <div className="header-logo">
            <div className='flex flex-col items-center'>
              <span className='font-bold text-[#404040] text-[24px] sm:tracking-[3px] sm:text-[32px]'>modimal</span>
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
              <a href=""><i className='far fa-heart'></i></a>  
              <a href=""><i className='fas fa-shopping-bag'></i></a>  
            </div>
          </div>

        </div>   
      </header>
      {/* -------HEADER--END------- */}

      {/* ------NAVBAR--HOVER------ */}
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
                <span>Pants</span>
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
                <span>Pants</span>
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
                <span>Pants</span>
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
                <span>Pants</span>
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
        <img className='w-full cursor-pointer' src="/src/img/photo_2025-01-26_19-54-17.jpg" alt="" />
      </div>
      {/* ------------MAIN------------- */}
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

export default App;
