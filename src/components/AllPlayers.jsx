import { fetchAllPlayers } from "../Api";
import SinglePlayer from "./SinglePlayer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate(`/players/${id}`);
  };

  return (
    // Mapping over each player
    <div>
      {players?.map((player) => {
        console.log(player);
        return (
          <SinglePlayer
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
