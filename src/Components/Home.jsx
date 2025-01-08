import React from 'react';
import mobBG from '/home/background-home-mobile.jpg';
import Navbar from './partials/Navbar';

function Home({setMenuBar}) {
  return (
    <div className={`px-2 pt-5 w-full h-screen bg-[url('${mobBG}')] bg-cover bg-center bg-no-repeat`}>
        <Navbar setMenuBar={setMenuBar}/>
    </div>
  )
}

export default Home