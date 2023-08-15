import { useEffect, useState } from "react";
import PlayerItem from "./PlayerItem";
import { fetchSinglePlayers } from "../Api";
import { useParams } from "react-router-dom";
const PlayerDetail = () => {
  const [player, setPlayer] = useState(null);
  const params = useParams();

  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchSinglePlayers(params.id);
      setPlayer(data);
    };
    playerContainer();
  }, [params.id]);

  return (
    <div>
      <PlayerItem player={player} isSinglePlayer />
      <p>{player?.status}</p>
      <p>{player?.breed}</p>
      <p>{player?.teamId}</p>
    </div>
  );
};

export default PlayerDetail;
