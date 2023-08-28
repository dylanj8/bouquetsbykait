import React from "react";
import heroimage from "../assets/heroimage.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img src={heroimage} alt="hero-image" />
        <div className="absolute flex justify-center items-center inset-0 text-white font-alex font-bold ">
          <h1 className="text-8xl tracking-wide md:text-9xl">
            Bouquets
            <br />
            by Kait
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
