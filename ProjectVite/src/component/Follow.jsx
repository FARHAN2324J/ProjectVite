function FollowSection() {
    return (
        <div className="p-[4px] md:p-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0C0C0C]">
                Follow us @modimal
            </h2>
            <div className="flex mt-6 items-center justify-center">
                <img 
                    src="/src/img/71.png" 
                    alt="" 
                    className="w-full md:w-1/3 max-w-none rounded-lg shadow-md block md:hidden" 
                />
                <div className="hidden md:flex ">
                    <img src="/src/img/70.png" alt="" className="w-1/2" />
                    <img src="/src/img/71.png" alt="" className="w-1/2" />
                </div>
            </div>
        </div>
    );
}

export default FollowSection;
