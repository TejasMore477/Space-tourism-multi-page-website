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
      <div className="w-full h-[88vh] text-white flex flex-col items-center justify-around pt-3 px-6 pb-10">
        <p className="text-[3vw] font-light text-center">03 Space launch 101</p>

        <div className="w-[70vw] h-[40vh] flex items-center justify-center">
          <img
            className="h-full object-cover object-top mt-5 border-b-[1.5px] border-zinc-500"
            src={techData[ti].images.portrait}
            alt={techData[ti].name}
          />
        </div>

        <div className="flex items-center justify-center gap-5 mt-4">
          {techData.map((e, i) => (
            <button
              key={i}
              onClick={() => setTi(i)}
              className={`text-[3vw] font-light ${
                ti === i ? "text-white border-b-[1px]" : "text-gray-400"
              }`}
            >
              ◉
            </button>
          ))}
        </div>
        

        <div className="mt-5 text-center">
        <h3 className="text-[4vw] text-zinc-400 font-semibold uppercase leading-none py-2">
        The terminology...
          </h3>
          <h2 className=" mb-5 text-[10vw] uppercase font-light leading-none">
            {techData[ti].name}
          </h2>
          <p className=" h-[15vh] mb-5 text-[3.4vw] leading-[17px] font-light mt-2 px-4">
            {techData[ti].description}
          </p>
    
        </div>
      </div>
    </div>
  );
}

export default Technology;
