// import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import "./index.css";

const App = () => {
  return (
    <>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/players/:id">Player</Link>
      </nav>
      <NewPlayerForm />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
};

export default App;
