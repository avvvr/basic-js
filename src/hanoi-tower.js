const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsCount = Math.pow(2, disksNumber) - 1;
  let secondsCount = Math.floor(turnsCount * 3600 / turnsSpeed);
  return {
    turns: turnsCount,
    seconds: secondsCount
  };
};