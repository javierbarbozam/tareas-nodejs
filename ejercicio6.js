// Crea una función llamada `writeToFile` que acepte un mensaje como parámetro y lo escriba en un
// archivo llamado "resultados.txt". Si ocurre algún error al escribir en el archivo, lanza una excepción con
// el mensaje "Error al escribir en el archivo 'resultados.txt'". Utiliza un módulo nativo de Node.js para
// realizar esta operación.

const fs = require("fs");

const readFile = () => {
  fs.readFile("./datos.txt", "utf8", (err, data) => {
    if (err) {
      console.error('El archivo datos.txt no existe', err);
      return;
    }
    console.log(data);
  });
};

module.exports = readFile
