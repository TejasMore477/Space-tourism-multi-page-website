import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";
import crwMbBg from "/crew/background-crew-mobile.jpg";
import json from "../data.json";

function Crew({ setMenuBar }) {
  const crewData = json.crew;
  console.log(crewData);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    console.log("comp mount");
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${crwMbBg})` }}
      className="px-2 pt-5 w-full h-screen bg-cover bg-center bg-no-repeat"
    >
      <Navbar setMenuBar={setMenuBar} />

      <div className="w-full h-[88vh] text-white flex flex-col items-center justify-evenly pt-3 sm:px-10 px-6 pb-10">
        <p className="md:text-[2.4vw] sm:text-[2.7vw] text-[3vw] font-light text-center"> 02 Meet your crew</p>
        <div className="w-[60vw] h-[40vh] flex items-center justify-center">
          <img
            className=" h-full object-cover object-center md:mt-10 mt-5 border-b-[1.5px] border-zinc-500"
            src={crewData[ci].images.png}
            alt={crewData[ci].name}
          />
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          {crewData.map((e, i) => (
            <button
              key={i}
              onClick={() => setCi(i)}
              className={`md:text-[2vw] sm:text-[2.6vw] text-[4vw] font-light ${
                ci === i ? "text-white" : "text-gray-400"
              }`}
            >
              ◉
            </button>
          ))}
        </div>

        <div className="text-center">
          <h3 className="md:text-[2vw] sm:text-[2.8vw] text-[4vw] text-zinc-400 font-semibold uppercase leading-none md:py-5 py-2">
           {crewData[ci].role}
          </h3>
          <h2 className="mb-5 md:text-[6vw] sm:text-[7vw]  text-[8vw] uppercase font-light leading-none">
            {crewData[ci].name}
          </h2>
          <p className="h-[12vh] mb-5 md:text-[2vw]  sm:text-[2.7vw] text-[3.4vw] leading-tight font-light mt-2 px-4">
            {crewData[ci].bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
