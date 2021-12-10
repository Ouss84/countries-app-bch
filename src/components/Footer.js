import React from "react";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <h3>
        Developped with
        <IoIosHeart className="heart" />
        by: <span>Oussama Bahri</span>
      </h3>
    </footer>
  );
};

export default Footer;
