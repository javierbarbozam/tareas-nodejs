// Crea una función llamada `formatPokemon` que acepte el nombre y los tipos de un Pokémon como
// parámetros y devuelva una cadena de texto formateada con el siguiente formato: "El Pokémon
// {nombre} es de tipo {tipo1} y {tipo2}". Si el Pokémon solo tiene un tipo, la cadena de texto debe ser: "El
// Pokémon {nombre} es de tipo {tipo1}". Utiliza el módulo `chalk` para que los nombres de los Pokémon y
// los tipos sean de color amarillo. Si alguno de los parámetros es nulo o indefinido, lanza una excepción
// con el mensaje "Datos de Pokémon incompletos". (15 puntos)

const PokemonTypes = (value) => {
  let result = "y es de tipo: ";
  value.forEach((element) => {
    result += `${element.type.name} `;
  });
  return result;
};

const formatPokemon = (name, type) => {
  if (name === undefined || type === undefined) {
    return "incorrect data, please try again";
  } else {
    const pokemon = `El nombre del Pokémon es ${name}`;
    const types = PokemonTypes(type);
    const result = pokemon + types;
    return result;
  }
};

module.exports = formatPokemon;
