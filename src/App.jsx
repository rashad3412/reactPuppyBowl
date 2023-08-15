// import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import PlayerDetail from "./components/PlayerDetail";
import NewPlayerForm from "./components/NewPlayerForm";
import "./index.css";

const App = () => {
  return (
    <>
      <nav className="navBar">
        <Link to="/">Home</Link>
      </nav>
      <NewPlayerForm />

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<PlayerDetail />} />
      </Routes>
    </>
  );
};

export default App;
