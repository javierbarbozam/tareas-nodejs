const chalk = require("chalk");

function multiplyNumber(num1, num2) {
  console.log(chalk.rgb(255, 136, 0)(num1 * num2));
}

module.exports = multiplyNumber;