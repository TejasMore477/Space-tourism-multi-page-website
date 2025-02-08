import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";
import json from "../data.json";
import TechMbBg from "/technology/background-technology-mobile.jpg";

function Technology({ setMenuBar }) {
  const techData = json.technology;
  const [ti, setTi] = useState(0);
  console.log(techData);

  useEffect(() => {
    console.log("comp mount");
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${TechMbBg})` }}
      className="px-2 pt-5 w-full h-screen bg-cover bg-center bg-no-repeat"
    >
      <Navbar setMenuBar={setMenuBar} />
      <div className="w-full h-[88vh] text-white flex flex-col items-center justify-around pt-3 sm:px-10 px-6 pb-10">
        <p className="lg:text-[2vw] md:text-[2.4vw] sm:text-[2.7vw] text-[3vw] font-light text-center">03 Space launch 101</p>

        <div className="sm:w-[40vw] w-[70vw] h-[40vh] flex items-center justify-center">
          <img
            className="h-full object-cover object-top md:mt-10 mt-5 border-b-[1.5px] border-zinc-500"
            src={techData[ti].images.portrait}
            alt={techData[ti].name}
          />
        </div>

        <div className="flex items-center justify-center gap-5 mt-5">
          {techData.map((e, i) => (
            <button
              key={i}
              onClick={() => setTi(i)}
              className={`lg:text-[1.7vw] md:text-[2vw] sm:text-[2.5vw] text-[3vw] font-light ${
                ti === i ? "text-white border-b-[1px]" : "text-gray-400"
              }`}
            >
              ◉
            </button>
          ))}
        </div>
        

        <div className="mt-5 lg:mt-3 text-center">
        <h3 className="lg:text-[1.7vw] md:text-[2vw] sm:text-[2.8vw] text-[4vw] text-zinc-400 font-semibold uppercase leading-none py-2">
        The terminology...
          </h3>
          <h2 className="mb-5  lg:mb-2 lg:text-[5vw] md:text-[6vw] sm:text-[7vw] text-[8vw] uppercase font-light leading-none">
            {techData[ti].name}
          </h2>
          <p className=" h-[15vh] mb-5 lg:mb-0 lg:text-[1.8vw] md:text-[2vw] sm:text-[2.7vw] text-[3.4vw] leading-tight font-light mt-2 px-4">
            {techData[ti].description}
          </p>
    
        </div>
      </div>
    </div>
  );
}

export default Technology;
