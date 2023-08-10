const cohortName = "2302-ACC-ET-PT-B";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const fetchAllPlayers = async () => {
  console.log("You did it");
  try {
    const response = await fetch(`${APIURL}/players`);
    const puppies = await response.json();
    return puppies.data.players;
  } catch (err) {
    console.error("Troubule fetching players");
  }
};
const fetchSinglePlayers = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const puppies = await response.json();
    return puppies.data.player;
  } catch (err) {
    console.error(`trouble fetching single player${playerId}`);
  }
};

export { fetchAllPlayers, fetchSinglePlayers };
