const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  toString() {
    let resultString;
    for (let i = 0; i < this.array.length; i++) {
      if (i === 0) resultString = `(${this.array[i]})`;
      else resultString += `~~(${this.array[i]})`;
    }
    return resultString;
  },
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (value === undefined) this.array.push(' ');
    else {
      this.array.push(` ${String(value)} `);
    }
    return this;
  },
  removeLink(position) {
    if (isNaN(position) === true ||
      this.array[position] === undefined ||
      Number.isInteger(position) === false) {
      this.array.splice(0, this.array.length);
      throw new Error;
    } else {
      this.array.splice((position - 1), 1);
      return this;
    }
  },
  reverseChain() {
    let newArray = [];
    for (let i = 0; i < this.array.length; i++) {
      newArray[i] = this.array[this.array.length - 1 - i];
    }
    this.array = newArray;
    return this;
  },
  finishChain() {
    let result = this.toString();
    this.array.splice(0, this.array.length);
    return result;
  }
};

module.exports = chainMaker;