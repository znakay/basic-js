const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = (2 ** disksNumber) - 1;
  const seconds = Math.trunc((3600 / turnsSpeed) * turnseturn {
    turns,
    seconds,
  }
}