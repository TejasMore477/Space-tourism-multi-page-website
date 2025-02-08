import React from "react";
import logo from "/shared/logo.svg";
import menu from "/shared/icon-hamburger.svg";
import { Link } from "react-router";

function Navbar({ setMenuBar }) {
  return (
    <div className="w-full xl:bg-fuchsia-600 lg:bg-red-800 bg-zinc-600 bg-opacity-15 backdrop-blur-sm flex items-center justify-between sm:px-10 px-4 sm:py-0 py-2">
      <Link to="/">
        <img className="md:size-[4.5vw] sm:size-[5vw] size-[9vw] cursor-pointer" src={logo} />
      </Link>
      <img
        onClick={() => setMenuBar((prev) => !prev)}
        className="lg:size-[2vw] md:size-[2.3vw] sm:size-[2.5vw] size-[3.5vw] cursor-pointer"
        src={menu}
      />
    </div>
  );
}

export default Navbar;
