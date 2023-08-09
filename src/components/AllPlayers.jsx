import fetchAllPlayers from "../Api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {
  // Render all players in competition
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchAllPlayers();
      setPlayers(data);
    };
    playerContainer();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(navigate(`/players/${id}`));
  };

  return (
    // Mapping over each player
    <div>
      {players.map((player) => {
        return (
          <div className="pets" key={player.id}>
            <h1>{player.name}</h1>
            <img src={player.imageUrl} width="200px" height="250px" />
            <button onClick={handleButtonClick}>{player.breed}</button>
            <button>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default AllPlayers;
