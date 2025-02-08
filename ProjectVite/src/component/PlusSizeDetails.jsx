import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import '../App.css'

export default function PlusSizeDetails() {
    const { id } = useParams();
    const [currentImage, setCurrentImage] = useState(""); 

    const items = [
        { id: 1, image: "/src/imgPlusSize/3.jpg", img1: "/src/imgPlusSize/3044ba2fe517c6dc1eee252f9ca304e6.png", img2: "/src/imgPlusSize/photo_2025-02-08_19-32-42.jpg", title: "Elastic Waist", description: "A dress that embodies success. Our best-selling dress designed to be fitted through the body.", price: "$120", isNew: false },
        { id: 2, image: "/src/imgPlusSize/4.jpg", title: "Cool Weave",img1: "/src/imgPlusSize/5.jpg", description: "A dress that embodies success. Our best-selling dress designed to be fitted through the body.", price: "$210", isNew: true },
    
    ];

    const item = items.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>No Item</div>;
    }

    // image org
    if (currentImage === "") {
        setCurrentImage(item.image);
    }

    // change image
    const handleImageChange = (image) => {
        setCurrentImage(image);
    };

    return (
        <div>
            <Navbar/>
            <div className='flex px-10 py-5 gap-5'>
                <Link to="/"><span className='text-gray-700'>Home</span></Link>
                <span className='text-gray-700'>/</span>
                <Link to="/PlusSize"><span className='text-gray-700'>PlusSize</span></Link>
                <span className='text-gray-700'>/</span>
                <Link><span className='text-gray-950'>{item.title}</span></Link>
            </div>
            <div className="p-10 flex m-5">
                <div className='flex gap-5'>
                    <div className='w-[15%] flex flex-col gap-2'>
                        <img 
                            src={item.img1} 
                            className='image-size cursor-pointer' 
                            alt="" 
                            onClick={() => handleImageChange(item.img1)} // change to img1
                        />
                        <img 
                            src={item.img2}  
                            className='image-size cursor-pointer' 
                            alt="" 
                            onClick={() => handleImageChange(item.img2)} // change to img2
                        />
                        <img 
                            src={item.image}  
                            className='image-size cursor-pointer' 
                            alt="" 
                            onClick={() => handleImageChange(item.image)} // change to img org
                        />
                    </div>
                    <div className='w-[60%] cursor-pointer'>
                        <img src={currentImage} alt={item.title} className="image-size" /> {/* show image */}
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className="text-3xl font-bold">{item.title}</h1>
                    <p className="text-lg">{item.description}</p>
                    <p className="text-xl font-bold">{item.price}</p>
                    <button className='bg-[#5A6D57] p-2 text-[#FFFFFF] cursor-pointer my-5'>Add To Cart {item.price}</button>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}
