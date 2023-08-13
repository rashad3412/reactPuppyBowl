import { Link } from "react-router-dom";
import { fetchSinglePlayers } from "../Api";
import { useEffect, useState } from "react";

const PlayerItem = ({ id }) => {
  const [player, setPlayer] = useState(null);
  console.log(player);

  useEffect(() => {
    if (id) {
      const onePlayer = async () => {
        const data = await fetchSinglePlayers(id);
        setPlayer(data);
      };
      onePlayer();
    }
  }, [id]);
  return (
    <div className="pets">
      <h1>{player?.name}</h1>
      <img src={player?.imageUrl} width="200px" height="200px" />
      <Link to={`/players/${player?.id}`}>Player</Link>
    </div>
  );
};
export default PlayerItem;
