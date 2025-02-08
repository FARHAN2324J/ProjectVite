import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"

export default function FAQs() {
    const [visibleMessages, setVisibleMessages] = useState(Array(4).fill(false));

    const toggleMessageVisibility = (index) => {
        const newVisibleMessages = [...visibleMessages];
        newVisibleMessages[index] = !newVisibleMessages[index];
        setVisibleMessages(newVisibleMessages);
    };

    return (
        <>
            <Navbar/>
            <div className='flex px-10 py-5 gap-5'>
                <Link to="/"><span className='text-gray-700'>Home</span></Link>
                <span className='text-gray-700'>/</span>
                <Link><span className='text-gray-950'>FAQs</span></Link>
            </div>
            <div className="w-[50%] m-auto flex flex-col gap-5 p-10">
                <h1 className="text-2xl font-bold my-5">FAQs</h1>
                <div className="flex flex-col gap-4 border-b p-2 border-[#CBCBCB]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#748C70] font-bold">How do I contact your Customer Service?</h1>
                        <button className="font-bold text-2xl   cursor-pointer" onClick={() => toggleMessageVisibility(0)}>{visibleMessages[0] ? '-' : '+'}</button>
                    </div>
                    {visibleMessages[0] && <p className="text-[#0C0C0C]">Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom corner of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.</p>}
                </div>

                <div className="flex flex-col gap-4 border-b p-2 border-[#CBCBCB]">
                    <div className="flex items-center justify-between">
                        <h1>When Will My Order Ship?</h1>
                        <button className="font-bold text-2xl cursor-pointer" onClick={() => toggleMessageVisibility(1)}>{visibleMessages[1] ? '-' : '+'}</button>
                    </div>
                    {visibleMessages[1] && <p className="text-[#0C0C0C]">Your order will ship soon!</p>}
                </div>

                
                <div className="flex flex-col gap-4 border-b p-2 border-[#CBCBCB]">
                    <div className="flex items-center justify-between">
                        <h1>Can I cancel or modify my order?</h1>
                        <button className="font-bold text-2xl cursor-pointer" onClick={() => toggleMessageVisibility(2)}>{visibleMessages[2] ? '-' : '+'}</button>
                    </div>
                    {visibleMessages[2] && <p className="text-[#0C0C0C]">Your order will ship soon!</p>}
                </div>
                
                <div className="flex flex-col gap-4 border-b p-2 border-[#CBCBCB]">
                    <div className="flex items-center justify-between">
                        <h1>What are my shipping options?</h1>
                        <button className="font-bold text-2xl  cursor-pointer" onClick={() => toggleMessageVisibility(3)}>{visibleMessages[3] ? '-' : '+'}</button>
                    </div>
                    {visibleMessages[3] && <p className="text-[#0C0C0C]">Your order will ship soon!</p>}
                </div>
                
                
                <div className="flex flex-col gap-4 border-b p-2 border-[#CBCBCB]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#748C70] font-bold">Which size will fit me best?</h1>
                        <button className="font-bold text-2xl cursor-pointer" onClick={() => toggleMessageVisibility(4)}>{visibleMessages[4] ? '-' : '+'}</button>
                    </div>
                    {visibleMessages[4] && <p className="text-[#0C0C0C]">We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.</p>}
                </div>
            </div>
            <Footer/>
        </>
    )
}
