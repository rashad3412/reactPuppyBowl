// import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { fetchAllPlayers } from "./Api";
import AllPlayers from "./components/AllPlayers";
import PlayerDetail from "./PlayerDetail";
import NewPlayerForm from "./components/NewPlayerForm";
import "./index.css";
import { useState, useEffect } from "react";

const App = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchAllPlayers();
      setPlayers(data);
    };
    playerContainer();
  }, []);

  return (
    <>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/players/:id"></Link>
      </nav>
      <NewPlayerForm />

      <Routes>
        <Route path="/" element={<AllPlayers />} players={players} />
        <Route path="/players/:id" element={<PlayerDetail />} />
      </Routes>
    </>
  );
};

export default App;
