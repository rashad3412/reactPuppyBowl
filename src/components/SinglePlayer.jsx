import { useNavigate } from "react-router-dom";
import { fetchSinglePlayers } from "../Api";
import { useState, useEffect } from "react";
const SinglePlayer = ({ id, handleButtonClick }) => {
  const [singleP, setSingleP] = useState(null);
  console.log(id);
  console.log(handleButtonClick);
  useEffect(() => {
    if (id) {
      const playerContainer = async () => {
        const data = await fetchSinglePlayers(id);
        setSingleP(data);
      };
      playerContainer();
    }
  }, [id]);

  // const navigate = useNavigate();

  // const handleButtonClick = ({ singlePuppy }) => {
  //   navigate(navigate(`/players/${singlePuppy}`));
  // };
  return (
    <div className="pets" key={singleP?.id}>
      <h1>{singleP?.name}</h1>
      <img src={singleP?.imageUrl} width="200px" height="250px" />
      <button onClick={() => handleButtonClick(singleP?.id)}>
        {singleP?.breed}
      </button>
    </div>
  );
};

export default SinglePlayer;
