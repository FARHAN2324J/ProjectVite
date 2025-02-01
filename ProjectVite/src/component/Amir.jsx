import Modify from "./AmirModi";
import "../App.css"
import FollowSection from "./Follow";
import Footer from "./Footer";

function Amir() {
    
    return (
        <div>

            <Modify />
            <img src="/src/img/50.png" alt="" className="w-full coustom my-20 cursor-pointer" />
            <FollowSection />
            <Footer/>
            
            
        
        </div>
    );
}

export default Amir;
