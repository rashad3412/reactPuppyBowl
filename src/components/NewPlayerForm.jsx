import { useState } from "react";

const NewPlayerForm = () => {
  const [breed, setBreed] = useState("");
  const [team, setTeam] = useState("");
  const [add, setAdd] = useState("");

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleTeamChange = (event) => {
    setTeam(event.target.value);
  };

  const handleAdd = (event) => {
    setAdd(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevents reloading
    event.preventDefault();

    // POST REQUEST HERE

    // clears form back to default
    setBreed("");
    setTeam("");
    setAdd("");
  };

  return (
    <div>
      <h1>Search and Add</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Breed:</label>
        <input
          type="text"
          value={breed}
          onChange={handleBreedChange}
          placeholder=""
        />
        <label htmlFor="text">Team:</label>
        <input type="text" value={team} onChange={handleTeamChange} />
        <label htmlFor="term">Add:</label>
        <input type="text" value={add} onChange={handleAdd} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
