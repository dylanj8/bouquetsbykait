import React from "react";
import { imageArr } from "./imageloader.js";
import Carousel from "./Carousel.jsx";

const Display = () => {
  return (
    <div className="bg-white text-center p-2 md:flex flex-col items-center mx-auto w-[80%]">
      <h1 className="font-alex font-bold text-main-color text-5xl md:text-7xl m-2">
        Gallery
      </h1>
      <div className="md:hidden">
        <Carousel>
          {imageArr.map((image, index) => (
            <img src={image} alt="image" key={index} />
          ))}
        </Carousel>
      </div>
      <div className="hidden md:grid grid-cols-4 gap-2 m-2 ">
        {imageArr.map((image, index) => (
          <div key={index}>
            <img src={image} alt="image" className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
