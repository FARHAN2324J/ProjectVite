import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PlusSize() {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([
        { id: 1, image: "/src/imgPlusSize/3.jpg", title: "Elastic Waist", description: "Anywhere Dress", price: "$210", isNew: true },
        { id: 2, image: "/src/imgPlusSize/4.jpg", title: "Cool Weave", description: "Anywhere Dress", price: "$210", isNew: false },
    ]);

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {           
            const newItems = [
                { id: 4, image: "/src/imgPlusSize/2.jpg", title: "New Item", description: "New Dress", price: "$250", isNew: true },
                { id: 5, image: "/src/imgPlusSize/5.jpg", title: "Old Item", description: "Old Dress", price: "$250", isNew: false },
            ];

            if (newItems.length > 0) {
                setItems(prevItems => [...prevItems, ...newItems]);
            } else {
                alert("No Item");
            }
            setLoading(false);
        }, 2000); 
    };

    return (
        <div>
            <Navbar/>
            <div className='flex px-10 py-5 gap-5'>
                <Link to="/"><span className='text-gray-700'>Home</span></Link>
                <span className='text-gray-700'>/</span>
                <Link><span className='text-gray-950'>PlusSize</span></Link>
            </div>
            <img src="/src/imgPlusSize/1.jpg" className="w-full my-5" alt="" />
            <div className="flex-wrap flex gap-5 justify-center m-10">
                {items.map(item => (
                    <Link to={`/PlusSize/${item.id}`} key={item.id} className="w-[30%]">

                        <div className='relative'>
                            {item.isNew && <span className="absolute px-3 m-2 bg-white">New</span>}
                            <img src={item.image} alt="" />
                        </div>
                        <h1 className='py-2 font-bold text-base'>{item.title}</h1>
                        <div className='flex justify-between my-2'>
                            <span className='font-normal text-base'>{item.description}</span>
                            <span className='font-bold'>{item.price}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span className='cursor-pointer w-5 h-5 bg-[#D0A5EA] rounded-[50%]'></span>
                            <span className='cursor-pointer w-5 h-5 bg-[#909225] rounded-[50%]'></span>
                            <span className='cursor-pointer w-5 h-5 bg-[#748C70] rounded-[50%]'></span>
                        </div>

                    </Link>
                ))}
            </div>
            <div className="flex justify-center">
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <button onClick={loadMoreItems} className="border border-l-[#5A6D57] text-[#5A6D57] px-6 py-1 m-10 cursor-pointer">
                        Load More
                    </button>
                )}
            </div>
            <Footer/>
        </div>
    );
}