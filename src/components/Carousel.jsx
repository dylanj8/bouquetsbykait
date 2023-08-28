import { React, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Carousel = ({ children: imageArr }) => {
  const [curr, setCurr] = useState(0);
  const gallLength = imageArr.length;

  const prev = () => {
    setCurr((curr) => (curr === 0 ? imageArr.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === imageArr.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="overflow-hidden relative rounded-md">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {imageArr}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          <BsChevronRight />
        </button>
      </div>
      <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
        {curr + 1} of {gallLength}
      </p>
    </div>
  );
};

export default Carousel;
