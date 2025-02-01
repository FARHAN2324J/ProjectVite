function Footer() {
    return (
        <footer className="text-white p-8 md:p-12 footer">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                {/* Subscription Section */}
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                    <h3 className="font-bold text-lg">Join Our Club, Get 15% Off For Your Birthday</h3>
                    <div className="flex items-center  rounded-lg border">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email Address" 
                            className="w-full bg-transparent text-white placeholder-gray-400 outline-none p-3 rounded-l-lg"
                        />
                        <button className="p-3 rounded-r-lg ">&rarr;</button>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 text-sm">
                        <input type="checkbox" id="agree" className="mt-1" />
                        <label htmlFor="agree">By submitting your email, you agree to receive advertising emails from Modimal.</label>
                    </div>
                </div>
                
                {/* Links Section */}
                <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-8">
                    <div className="w-1/2 md:w-auto">
                        <h4 className="font-bold mb-3">About Modimal</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>Collection</li>
                            <li>Sustainability</li>
                            <li>Privacy Policy</li>
                            <li>Support System</li>
                            <li>Terms & Condition</li>
                            <li>Copyright Notice</li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-auto">
                        <h4 className="font-bold mb-3">Help & Support</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>Orders & Shipping</li>
                            <li>Returns & Refunds</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-auto">
                        <h4 className="font-bold mb-3">Join Up</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>Modimal Club</li>
                            <li>Careers</li>
                            <li>Visit Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Bottom Section */}
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 gap-4">
                <p className="text-gray-400 text-sm">© 2023 Modimal. All Rights Reserved.</p>
                <div className="flex space-x-4">
                    <i className="fab fa-instagram text-2xl cursor-pointer"></i>
                    <i className="fab fa-facebook text-2xl cursor-pointer"></i>
                    <i className="fab fa-pinterest text-2xl cursor-pointer"></i>
                    <i className="fab fa-tiktok text-2xl cursor-pointer"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
