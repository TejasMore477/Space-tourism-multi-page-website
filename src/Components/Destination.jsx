import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";
import json from "../data.json";
import destMbBg from "/destination/background-destination-mobile.jpg";

function Destination({ setMenuBar }) {
  const destData = json.destinations;
  const [di, setDi] = useState(0);

  useEffect(() => {
    console.log("comp mount");
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${destMbBg})` }}
      className="px-2 pt-5 w-full h-screen bg-cover bg-center bg-no-repeat"
    >
      <Navbar setMenuBar={setMenuBar} />
      <div className="w-full h-[88vh] text-white flex flex-col items-center md:justify-center justify-around pt-3 sm:px-10 px-6 pb-10">
        <p className="xl:text-[1.4vw] lg:text-[1.7vw] md:text-[2.4vw] sm:text-[2.7vw] text-[3vw] font-light text-center">
          01 Pick your destination
        </p>

        <img
          className="xl:size-[14vw] lg:size-[18vw] md:size-[22vw] sm:size-[28vw] size-[40vw] mt-5 md:my-5"
          src={destData[di].images.png}
          alt={destData[di].name}
        />

        <div className="flex items-center justify-center gap-5 mt-4">
          {destData.map((e, i) => (
            <button
              key={i}
              onClick={() => setDi(i)}
              className={`xl:text-[1.2vw] lg:text-[1.4vw] md:text-[1.7vw] sm:text-[2vw] text-[3vw] font-light ${
                di === i ? "text-white border-b-[1px]" : "text-gray-400"
              }`}
            >
              {e.name}
            </button>
          ))}
        </div>

        <div className="mt-3 text-center">
          <h2 className="mb-3 xl:text-[7vw] lg:text-[8vw] text-[10vw] uppercase font-light leading-none">
            {destData[di].name}
          </h2>
          <p className="h-[10vh] mb-3 xl:text-[1.4vw] lg:text-[1.7vw] md:text-[2vw]  sm:text-[2.4vw] text-[3vw] leading-tight font-light mt-2 px-4">
            {destData[di].description}
          </p>
          <hr className="border-none h-[1.5px] bg-zinc-600 mt-2" />
          <div className="md:flex items-start justify-center md:text-start gap-10">
          <div>
          <h3 className="mt-3 xl:text-[1.4vw] lg:text-[1.7vw] md:text-[2vw] sm:text-[2.6vw] text-[3.3vw] text-zinc-400 font-semibold uppercase leading-none tracking-tighter py-2">
            Avg. distance
          </h3>
          <h2 className="xl:text-[2.5vw] lg:text-[3vw] md:text-[3.7vw] md:mt-1 sm:text-[4.3vw] text-[5.3vw] tracking-tight font-semibold italic leading-none">
            {destData[di].distance}
          </h2>
          </div>
          <div>
          <h3 className="md:mt-3 mt-5 xl:text-[1.4vw] lg:text-[1.7vw] md:text-[2vw] sm:text-[2.6vw] text-[3.3vw] text-zinc-400 font-semibold uppercase leading-none tracking-tighter py-2">
            Est. travel time
          </h3>
          <h2 className="xl:text-[2.5vw] lg:text-[3vw] md:text-[3.7vw] md:mt-1 sm:text-[4.3vw] text-[5.3vw] tracking-tight font-semibold italic leading-none">
            {destData[di].travel}
          </h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
