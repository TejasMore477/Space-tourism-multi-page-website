import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import SideMenu from './Components/partials/SideMenu';
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";

function App() {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <div className="relative min-h-screen w-full">
      <SideMenu setMenuBar={setMenuBar} menuBar={menuBar}/>
      <Routes>
        <Route path="/" element={<Home setMenuBar={setMenuBar} />} />
        <Route path="/destination" element={<Destination setMenuBar={setMenuBar} />} />
        <Route path="/crew" element={<Crew setMenuBar={setMenuBar} />} />
        <Route path="/technology" element={<Technology setMenuBar={setMenuBar} />} />
      </Routes>
    </div>
  );
}

export default App;
