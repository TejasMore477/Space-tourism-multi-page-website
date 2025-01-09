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

      <div className="w-full h-[88vh] text-white flex flex-col items-center justify-evenly pt-3 px-6 pb-10">
        <p className="text-[3vw] font-light text-center"> 02 Meet your crew</p>
        <div className="w-[60vw] h-[40vh] flex items-center justify-center">
          <img
            className=" h-full object-cover object-center mt-5 border-b-[1.5px] border-zinc-500"
            src={crewData[ci].images.png}
            alt={crewData[ci].name}
          />
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          {crewData.map((e, i) => (
            <button
              key={i}
              onClick={() => setCi(i)}
              className={`text-[3.5vw] font-light ${
                ci === i ? "text-white border-b-[1px]" : "text-gray-400"
              }`}
            >
              ◉{" "}
            </button>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-[4vw] text-zinc-400 font-semibold uppercase leading-none py-2">
           {crewData[ci].role}
          </h3>
          <h2 className=" mb-5 text-[8vw] uppercase font-light leading-none">
            {crewData[ci].name}
          </h2>
          <p className=" h-[10vh] mb-5 text-[3vw] leading-[17px] font-light mt-2 px-4">
            {crewData[ci].bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
