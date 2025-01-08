import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";

function App() {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home setMenuBar={setMenuBar} />} />
      </Routes>
    </div>
  );
}

export default App;
