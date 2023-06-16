// Crea una función asincrónica llamada `fetchPokemon` que acepte un número como parámetro. Utiliza
// axios para hacer una solicitud GET a la siguiente URL: `https://pokeapi.co/api/v2/pokemon/{numero}`.
// Reemplaza "{numero}" con el número proporcionado como parámetro. La función debe retornar los
// datos obtenidos en formato JSON. 

const axios = require("axios");

const fetchPokemon = async (value) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
    const data = await res.data;
    return data;
  } catch {
    return "An error have ocurred";
  }
};

module.exports = fetchPokemon;
