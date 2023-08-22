// import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import PlayerDetail from "./components/PlayerDetail";

import "./index.css";

const App = () => {
  return (
    <>
      <nav className="navBar">
        <Link to="/"></Link>
      </nav>
      <div className="pets">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<PlayerDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
