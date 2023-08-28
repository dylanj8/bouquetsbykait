import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="items-center md:text-center p-4">
        <h3 className="font-bold font-playfair text-main-color md: text-4xl">
          Interested in a bouquet? Contact me on any socials or email!
        </h3>
        <div className="flex text-main-color justify-evenly md:text-4xl m-4">
          <a
            href="https://www.facebook.com/people/Bouquets-By-Kait/100076020626848/?paipv=0&eav=AfauqpJEmcTqhRoHF1W0uHzg4oT02JXqnKnCvr-iW70NEyPj9x83ShU2dSp5hy_itvw&_rdr"
            target="_blank"
          >
            <FaSquareFacebook />
          </a>

          <a
            href="https://www.instagram.com/bouquetsbykait/?hl=en"
            target="_blank"
          >
            <FaInstagramSquare />
          </a>

          <a href="mailto:bouquetsbykait@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
        <p className="font-playfair text-sm text-main-color text-center">
          © 2023 made by Dylan J. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
