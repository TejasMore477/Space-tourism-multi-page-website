import React from "react";
import close from "/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

function SideMenu({ setMenuBar, menuBar }) {
  return menuBar && (
      <div
        onClick={(e) => {
          e.stopPropagation();
          setMenuBar(false);
        }}
        className=" z-50 absolute h-screen bg-black bg-opacity-65 w-full flex justify-end duration-300 ease-linear transition-all"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[60%] rounded-l-lg bg-zinc-600 backdrop-blur-sm bg-opacity-15 px-6 pt-10"
        >
          <div className="w-full flex justify-end">
            <img
              onClick={(e) => {
                e.stopPropagation();
                setMenuBar(false);
              }}
              className="size-[4vw]"
              src={close}
            />
          </div>
          <div className="mt-12 flex flex-col items-start justify-start gap-5 w-full text-[4.7vw] font-light">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-white" : "text-gray-400")}
            >
              <span className="font-semibold pr-1">00</span> Home
            </NavLink>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? "text-white" : "text-gray-400")}
            >
              <span className="font-semibold pr-1">01</span> Destination
            </NavLink>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? "text-white" : "text-gray-400")}
            >
              <span className="font-semibold pr-1">02</span> Crew
            </NavLink>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? "text-white" : "text-gray-400")}
            >
              <span className="font-semibold pr-1">03</span> Technology
            </NavLink>
          </div>
        </div>
      </div>
    )
}

export default SideMenu;
