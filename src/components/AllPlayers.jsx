import { fetchAllPlayers } from "../Api";

import { useState, useEffect } from "react";

import PlayerItem from "./PlayerItem";

const AllPlayers = () => {
  // Render all players in competition
  const [players, setPlayers] = useState([]);
  console.log(players);
  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchAllPlayers();
      console.log(data);
      setPlayers(data);
    };
    playerContainer();
  }, []);

  return (
    // Mapping over each player
    <div>
      {players?.map((player) => {
        return <PlayerItem key={player.id} player={player} />;
      })}
    </div>
  );
};

export default AllPlayers;
