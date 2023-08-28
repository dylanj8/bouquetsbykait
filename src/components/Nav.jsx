import { React, useState } from "react";
import kaitlogo from "../assets/kaitlogo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      {showDropDown && <Dropdown props={{ setShowDropDown, showDropDown }} />}
      <div>
        <nav>
          {!showDropDown ? (
            <div className="flex bg-main-color p-2 justify-between items-center md:hidden">
              <img src={kaitlogo} alt="logo" className="rounded-full w-20" />
              <div
                className="text-6xl text-white cursor-pointer"
                onClick={() => setShowDropDown(!showDropDown)}
              >
                <RxHamburgerMenu />
              </div>
            </div>
          ) : null}

          {!showDropDown ? (
            <div className="hidden md:flex justify-between items-center p-4 bg-main-color text-white font-alex">
              <img src={kaitlogo} alt="logo" className="rounded-full w-20" />
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
          ) : null}
        </nav>
      </div>
    </>
  );
};

export default Nav;
