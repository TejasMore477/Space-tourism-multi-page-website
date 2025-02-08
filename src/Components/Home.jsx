import React from "react";
import mobBG from "/home/background-home-mobile.jpg";
import Navbar from "./partials/Navbar";
import { Link } from "react-router";

function Home({ setMenuBar }) {
  return (
    <div
      style={{ backgroundImage: `url(${mobBG})` }}
      className="px-2 pt-5 w-full h-screen bg-cover bg-center bg-no-repeat"
    >
      <Navbar setMenuBar={setMenuBar} />
      <div className="text-white flex flex-col items-center sm:justify-center pt-10 h-[85vh] px-10">
        <p className="xl:text-[1.7vw] lg:text-[2.1vw] md:text-[2.4vw] sm:text-[2.7vw] text-[4vw] font-thin md:leading-none">So, you want to travel to</p>
        <h1 className="lg:text-[12vw] md:text-[15vw] md:leading-none text-[18vw] uppercase font-mdium">Space</h1>
        <p className="text-center md:my-5 xl:text-[1.4vw] lg:text-[1.8vw] md:text-[2vw] sm:text-[2.5vw] sm:px-10 text-[4.3vw] font-light leading-tight">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <Link
          to="/destination"
          className="xl:size-[12vw] lg:size-[14vw] md:size-[19vw] sm:size-[20vw] size-[37vw]  xl:text-[1.3vw]  lg:text-[1.8vw] md:text-[2vw] sm:text-[2.5vw] text-[3.5vw] grid place-content-center rounded-full text-black font-semibold md:mt-0 mt-20 bg-white animate-pulse"
        >
          Explore
        </Link>
        <div className="w-full flex items-center justify-center text-center font-medium xl:text-[1vw] lg:text-[1.2vw] md:text-[1.5vw]  sm:text-[1.7vw] text-[2.5vw] leading-tight sm:mt-20 mt-5">
          Challenge by
          <a
            className="text-black hover:text-blue-900 px-1 ease-in-out delay-100 transition-colors"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            href="https://github.com/TejasMore477/Space-tourism-multi-page-website"
            className="text-black hover:text-blue-900 px-1 ease-in-out delay-100 transition-colors"
          >
            Tejas More
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Home;
