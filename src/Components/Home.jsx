import React from "react";
import mobBG from "/home/background-home-mobile.jpg";
import Navbar from "./partials/Navbar";
import { Link } from "react-router";

function Home({ setMenuBar }) {
  return (
    <div
      style={{ backgroundImage: `url(${mobBG})` }}
      className={`px-2 pt-5 w-full h-screen bg-cover bg-center bg-no-repeat`}
    >
      <Navbar setMenuBar={setMenuBar} />
      <div className="text-white flex flex-col items-center justify-center pt-10 h-[85vh] bg-red-9000 px-10">
        <p className="text-[4vw] font-thin">So, you want to travel to</p>
        <h1 className="text-[18vw] uppercase font-mdium">Space</h1>
        <p className="text-center text-[4.3vw] font-light leading-tight">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button type="button" className="size-[37vw] text-[3.5vw] text-center rounded-full text-black font-semibold mt-20 bg-white animate-pulse">
          <Link  to="/destination" >Explore</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
