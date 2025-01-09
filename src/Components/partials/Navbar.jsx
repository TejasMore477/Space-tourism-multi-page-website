import React from "react";
import logo from "/shared/logo.svg";
import menu from "/shared/icon-hamburger.svg";
import { Link } from "react-router";

function Navbar({ setMenuBar }) {
  return (
    <div className="w-full bg-zinc-600 bg-opacity-15 backdrop-blur-sm flex items-center justify-between px-4 py-2">
      <Link to="/">
        <img className="size-[9vw] cursor-pointer" src={logo} />
      </Link>
      <img
        onClick={() => setMenuBar((prev) => !prev)}
        className="size-[3.5vw] cursor-pointer"
        src={menu}
      />
    </div>
  );
}

export default Navbar;
