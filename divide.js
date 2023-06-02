const chalk = require("chalk");

function divideNumber(num1, num2) {
  num1 <= 0 ? null : console.log(chalk.white(num1 - num2));
}

module.exports = divideNumber;
