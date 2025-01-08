import React from 'react';
import mobBG from '/home/background-home-mobile.jpg';
import Navbar from './partials/Navbar';

function Home({setMenuBar}) {
  return (
    <div style={{ backgroundImage: `url(${mobBG})` }} className={`px-2 pt-5 w-full h-screen bg-cover bg-center bg-no-repeat`}>
        <Navbar setMenuBar={setMenuBar}/>
    </div>
  )
}

export default Home