import { Link } from "react-router-dom";

const SeeDetails = ({ player }) => {
  return (
    <div className="pets">
      <h1>{player?.name}</h1>
      <img src={player?.imageUrl} width="200px" height="200px" />
    </div>
  );
};
export default SeeDetails;
