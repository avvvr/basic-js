const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = String(options.addition);
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let resultStr = '';

  if (repeatTimes !== 0) {
    for (let i = 0; i < repeatTimes; i++) {
      resultStr += str;
      if (addition !== 'undefined') {
        for (let j = 0; j < additionRepeatTimes; j++) {
          if (j === (additionRepeatTimes - 1))
            resultStr += addition;
          else
            resultStr += addition + additionSeparator;
        }
      }
      if (i !== (repeatTimes - 1))
        resultStr += separator;
    }
  }

  return resultStr;
};