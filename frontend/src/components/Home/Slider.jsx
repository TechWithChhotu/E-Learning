import SimpleImageSlider from "react-simple-image-slider";
import carousel1 from "../../assets/Slider/carousel-1.jpg";
import carousel2 from "../../assets/Slider/carousel-2.jpg";
import carousel3 from "../../assets/Slider/carousel-3.png";
import carousel4 from "../../assets/Slider/carousel-4.png";

import { useEffect, useState } from "react";
const images = [
  {
    url: carousel3,
  },
  {
    url: carousel4,
  },
  {
    url: carousel1,
  },
  {
    url: carousel2,
  },
];

const Slider = () => {
  return (
    <div className="relative">
      <SimpleImageSlider
        width={"100%"}
        height={`${window.screen.width <= 640 ? "200px" : "500px"}`}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      {/* <div className="bg-blue-500 w-full h-full absolute top-0 opacity-30"></div> */}
    </div>
  );
};

export default Slider;
