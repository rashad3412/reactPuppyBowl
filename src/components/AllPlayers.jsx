import { fetchAllPlayers, removePlayer } from "../Api";

import { useState, useEffect } from "react";

import PlayerItem from "./PlayerItem";
import NewPlayerForm from "./NewPlayerForm";

const AllPlayers = () => {
  // Render all players in competition
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  console.log(players);

  useEffect(() => {
    const playerContainer = async () => {
      const data = await fetchAllPlayers();
      console.log(data);
      setPlayers(data);
    };
    playerContainer();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const displayPlayers = search
    ? players.filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase())
      )
    : players;

  const handleRemove = async (playerId) => {
    await removePlayer(playerId);
    const updatedPlayers = players.filter((player) => {
      return player.id !== playerId;
    });

    setPlayers(updatedPlayers);
  };

  return (
    // Mapping over each player
    <div>
      <NewPlayerForm />
      <div className="newFormat">
        <div className="b">
          <label htmlFor="search"></label>
          <input
            className="search"
            type="text"
            value={search}
            onChange={handleSearch}
          />
          <button id="button" type="submit">
            search
          </button>
        </div>
      </div>

      <div className="allplayers">
        {displayPlayers?.map((player) => {
          return (
            <PlayerItem
              key={player.id}
              player={player}
              onRemove={handleRemove}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPlayers;
