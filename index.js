const rs = require("readline-sync");
const searchPokemon = require("./ejercicio3");
const formatPokemon = require("./ejercicio4");
const readFile = require("./ejercicio6");
const writeToFile = require("./ejercicio7");

const initPokemon = async () => {
  const number = rs.question("Insert a number");

  // guardando pokemon en variable para los demás ejercicios
  const pokemon = await searchPokemon(number);

  // deestructurando las propiedades para la oración formateada
  const { name, types } = pokemon;
  // ejercicio 5
  formatPokemon(name, types);
};

initPokemon();
readFile();
writeToFile("Examen finalizado");
