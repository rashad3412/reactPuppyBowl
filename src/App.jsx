// import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import PlayerDetail from "./components/PlayerDetail";
import NewPlayerForm from "./components/NewPlayerForm";
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "./Api";
import "./index.css";

const App = () => {
  // Render all players in competition
  const [players, setPlayers] = useState([]);
  console.log(players);
  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchAllPlayers();
      const filter = data.filter((obj) => {
        return obj.name === "test";
      });
      console.log(filter);
      console.log(data);
      setPlayers(data);
    };
    playerContainer();
  }, []);
  return (
    <>
      <nav className="navBar">
        <Link to="/">Home</Link>
      </nav>
      <div className="pets">
        <NewPlayerForm players={players} />

        <Routes>
          <Route path="/" element={<AllPlayers />} players={players} />
          <Route path="/players/:id" element={<PlayerDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
