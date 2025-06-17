import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full h-[70px] bg-black fixed bottom-0 md:top-0 z-30 text-white rounded-t-[25px] md:rounded-t-none flex items-center   justify-around md:justify-center gap-9">
      <Link to={"/"}>
        <IoIosHome className="w-[28px] h-[28px]" />
      </Link>
      <Link to={"/search"}>
        <FaSearch className="w-[28px] h-[28px]" />
      </Link>
      <Link to={"/playlist"}>
        <RiPlayListFill className="w-[28px] h-[28px]" />
      </Link>
      <Link to={"/liked"}>
        <FaHeart className="w-[28px] h-[28px]" />
      </Link>
    </div>
  );
}

export default Nav;
