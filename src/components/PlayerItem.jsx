import { useNavigate } from "react-router-dom";

const PlayerItem = ({ player, isSinglePlayer }) => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate(`/players/${player.id}`);
  }
  return (
    <div className="pets">
      <h1>{player?.name}</h1>
      <img src={player?.imageUrl} width="200px" height="200px" />
      {/* <Link to={`/players/${player?.id}`}>Player</Link> */}
      {!isSinglePlayer && <button onClick={handleButtonClick}>Player</button>}
    </div>
  );
};
export default PlayerItem;
