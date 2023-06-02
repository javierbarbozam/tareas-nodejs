const chalk = require("chalk");

function addNumber(num1, num2) {
  console.log(chalk.red(num1 + num2));
}

module.exports = addNumber;
