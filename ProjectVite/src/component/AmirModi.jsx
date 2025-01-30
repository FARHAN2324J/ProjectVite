import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Modify() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 640, // Mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024, // Tablet screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className="p-20">
            <h1 className="text-3xl font-semibold text-[#0C0C0C]">Modiweek</h1>
            <div className="mt-5">
                <div className="hidden md:flex items-center justify-between cursor-pointer">
                    <div>
                        <img src="/src/img/46.png" alt="" />
                        <h2 className="mt-8 font-bold text-xl">Sunday</h2>

                    </div>
                    <div>
                        <img src="/src/img/45.png" alt="" />
                        <h2 className="mt-8 font-bold text-xl">Monday</h2>

                    </div>
                    <div>
                        <img src="/src/img/47.png" alt="" />
                        <h2 className="mt-8 font-bold text-xl">Tuesday</h2>

                    </div>
                    <div>
                        <img src="/src/img/48.png" alt="" />
                        <h2 className="mt-8 font-bold text-xl">Wednesday</h2>

                    </div>
                </div>
                <div className="md:hidden">
                    <Slider {...settings}>
                        <img src="/src/img/46.png" alt="" />
                        <img src="/src/img/45.png" alt="" />
                        <img src="/src/img/48.png" alt="" />
                        <img src="/src/img/47.png" alt="" />
                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default Modify