import { useNavigate } from "react-router-dom";
import { removePlayer } from "../Api";

const PlayerItem = ({ player, isSinglePlayer, onRemove }) => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate(`/players/${player.id}`);
  }

  const handleRemove = async () => {
    // try {
    //   const response = await removePlayer(id, name, breed, imageUrl);
    //   window.location.reload();
    //   console.log(response, "players waas removed");
    // } catch (error) {
    //   console.error(error);
    // }
    onRemove(player.id);
  };
  return (
    <div className="pets">
      <h1>{player?.name}</h1>
      <img src={player?.imageUrl} width="200px" height="200px" />
      <div>
        {!isSinglePlayer && <button onClick={handleButtonClick}>Player</button>}
        <button className="remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default PlayerItem;
