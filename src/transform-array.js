const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) === false) throw new Error;
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--discard-prev' ||
        arr[i + 2] === '--double-prev') {
        i += 2;
        continue;
      }
      i++;
      continue;
    } else if (arr[i] === '--discard-prev') {
      if (i !== 0) {
        newArr.pop();
        j--;
      }
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        newArr[j] = arr[i + 1];
        j++;
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0) {
        newArr[j] = arr[i - 1];
        j++;
      }
    } else {
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
};