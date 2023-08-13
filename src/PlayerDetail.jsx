import { useEffect, useState } from "react";
import PlayerItem from "./components/PlayerItem";
import { fetchSinglePlayers } from "./Api";
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
    player && (
      <div>
        <PlayerItem player={player} />
      </div>
    )
  );
};

export default PlayerDetail;
