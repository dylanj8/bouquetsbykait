import React from "react";
import kaitlogo from "../assets/kaitlogo.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Dropdown = ({ props }) => {
  const { showDropDown, setShowDropDown } = props;

  return (
    <div
      onClick={() => setShowDropDown(!showDropDown)}
      className="flex flex-col justify-between items-center p-4 bg-main-color text-white font-alex w-screen h-screen"
    >
      <img
        src={kaitlogo}
        alt="logo"
        className="rounded-full w-20 cursor-pointer"
      />
      <a href="#About">
        <h3 className="text-4xl font-bold cursor-pointer">About</h3>
      </a>

      <a
        href="https://www.facebook.com/people/Bouquets-By-Kait/100076020626848/?paipv=0&eav=AfauqpJEmcTqhRoHF1W0uHzg4oT02JXqnKnCvr-iW70NEyPj9x83ShU2dSp5hy_itvw&_rdr"
        className="text-4xl"
        target="_blank"
      >
        <FaSquareFacebook className="social-icons cursor-pointer" />
      </a>
      <a
        href="https://www.instagram.com/bouquetsbykait/?hl=en"
        className="text-4xl"
        target="_blank"
      >
        <FaInstagramSquare className="social-icons cursor-pointer" />
      </a>
      <a href="mailto:bouquetsbykait@gmail.com" className="text-4xl">
        <AiOutlineMail className="mail-icon cursor-pointer" />
      </a>
    </div>
  );
};

export default Dropdown;
