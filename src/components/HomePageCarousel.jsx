import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[1px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent"
      onClick={onClick}
    >
      <span className="text-5xl text-white hover:text-gray-300">›</span>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[1px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent"
      onClick={onClick}
    >
      <span className="text-5xl text-white hover:text-gray-300">‹</span>
    </div>
  );
};

const HomePageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full h-full mx-auto">
      <Slider {...settings}>
        {[
          "/images/VB-2.5-LB-BIKE-BATTERY.png",
          "/images/VB-4-LB-BIKE-BATTERY.png",
          "/images/VB-5-LB-BIKE-BATTERY.png",
          "/images/VByt5lb.png",
          "/images/VB-7-LB-BIKE-BATTERY.png",
          "/images/VB-9-LB-BIKE-BATTERY.png",
          "/images/VB-Yt9-LB-BIKE-BATTERY.png",
          "/images/VB-14-LB-BIKE-BATTERY.png",
        ].map((src, idx) => (
          <div key={idx} className="flex justify-center items-center h-[20vh] min-h-80">
            <img
              src={src}
              alt={`slide-${idx}`}
              className="max-h-[400px] w-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePageCarousel;
