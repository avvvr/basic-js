const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments[0] === undefined) return 'Unable to determine the time of year!';
  else if(isNaN(date.valueOf()) && date instanceof Date) throw new Error();
  else {
    let month = date.getMonth() + 1;
    if (month === 1 || month === 2 || month === 12)
      return 'winter';
    if (month === 3 || month === 4 || month === 5)
      return 'spring';
    if (month === 6 || month === 7 || month === 8)
      return 'summer';
    if (month === 9 || month === 10 || month === 11)
      return 'autumn';
  }
};