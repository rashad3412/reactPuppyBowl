import { useNavigate } from "react-router-dom";
import fetchAllPlayers from "../Api";
import { useState, useEffect } from "react";
const SinglePlayer = () => {
  const [singleP, setSingleP] = useState([]);

  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchAllPlayers();
      setSingleP(data);
    };
    playerContainer();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(navigate(`/players/${id}`));
  };
  return (
    <div>
      {singleP.map((player) => {
        return (
          <div className="singleP" key={player.id}>
            <img src={player.imageUrl} width="200px" height="250px" />
            <button onClick={handleButtonClick}>{player.breed}</button>
            <h1>{player.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SinglePlayer;
