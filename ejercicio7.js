// Crea una función llamada `writeToFile` que acepte un mensaje como parámetro y lo escriba en un
// archivo llamado "resultados.txt". Si ocurre algún error al escribir en el archivo, lanza una excepción con
// el mensaje "Error al escribir en el archivo 'resultados.txt'". Utiliza un módulo nativo de Node.js para
// realizar esta operación.

const writeToFile = (message) => {
  const fs = require("fs");

  fs.writeFile("./resultados.txt", message, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("file written successfully");
  });
};

module.exports = writeToFile