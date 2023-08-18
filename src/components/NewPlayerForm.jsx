import { useState } from "react";

const cohortName = "2302-ACC-ET-PT-B";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const NewPlayerForm = () => {
  const [breed, setBreed] = useState("");
  const [team, setTeam] = useState("");
  const [name, setName] = useState(" ");
  const [seacrh, setSearch] = useState("");

  const handleBreedSearch = (event) => {
    setBreed(event.target.value);
  };

  const handleTeamSearch = (event) => {
    setTeam(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    // prevents reloading
    event.preventDefault();

    // POST REQUEST HERE
    const addPlayer = async () => {
      try {
        const response = await fetch(`${APIURL}/players/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            breed,
            name,
          }),
        });
        const result = await response.json();
        console.log(result);
        return result;
      } catch (err) {
        console.log(err);
      }
    };

    await addPlayer();

    // clears form back to default

    setBreed("");
    setTeam("");
    setName("");
    setSearch("");
  };

  return (
    <div>
      <h1>Search and Add</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          value={breed}
          onChange={handleBreedSearch}
          placeholder=""
        />
        <label htmlFor="text">Team:</label>
        <input type="text" value={team} onChange={handleTeamSearch} />
        <label htmlFor="text">Name:</label>
        <input type="text" value={name} onChange={handleName} />
        <button type="submit">Submit</button>
      </form>
      <label htmlFor="search"></label>
      <input
        className="search"
        type="text"
        value={seacrh}
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default NewPlayerForm;
