// Utilizando la función `fetchPokemon` y async/await, realiza una solicitud a la API mencionada y
// muestra en consola el nombre y los tipos de un Pokémon con el número 25. Si el número proporcionado
// es menor a 1 o mayor a 898, lanza una excepción con el mensaje "Número de Pokémon inválido". (20
// puntos)

const fetchPokemon = require("./ejercicio2");

const searchPokemon = async (value) => {
  let result;
  if(value >= 1 && value <= 898) {
    result = await fetchPokemon(value)
    return result
  } else {
    console.log('Número de Pokémon inválido')
    return
  }
};

module.exports = searchPokemon
