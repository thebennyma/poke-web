const url = "https://pokeapi.co/api/v2";

function getPokemon(id) {
  return fetch(`${url}/pokemon/${id}`).then(res => res.json());
}
function getSpeciePokemon(id) {
  return fetch(`${url}/pokemon-species/${id}`).then(res => res.json());
}

export default {
  getPokemon,
  getSpeciePokemon
};
