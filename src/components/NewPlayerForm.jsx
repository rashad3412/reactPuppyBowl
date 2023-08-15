import { useState } from "react";

const cohortName = "2302-ACC-ET-PT-B";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

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
    const addPlayer = async (breed, name) => {
      try {
        const response = await fetch(`${APIURL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Add: {
              breed,
              name,
            },
          }),
        });
        const result = await response.json();
        console.log(result);
        return result;
      } catch (err) {
        console.log(err);
      }
    };

    // clears form back to default
    setBreed("");
    setTeam("");
    setAdd(addPlayer);
  };

  return (
    <div>
      <h1>Search and Add</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="breed">Breed:</label>
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
