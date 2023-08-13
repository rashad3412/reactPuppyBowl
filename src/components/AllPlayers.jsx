import { fetchAllPlayers } from "../Api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PlayerDetail from "../PlayerDetail";
import PlayerItem from "./PlayerItem";

const AllPlayers = () => {
  // Render all players in competition
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchAllPlayers();
      console.log(data);
      setPlayers(data);
    };
    playerContainer();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/players/${id}`, { state: { id } });
  };

  return (
    // Mapping over each player
    <div>
      {players?.map((player) => {
        console.log(player);
        return (
          <PlayerItem
            key={player.id}
            id={player.id}
            handleButtonClick={handleButtonClick}
          />
        );
      })}
    </div>
  );
};

export default AllPlayers;
