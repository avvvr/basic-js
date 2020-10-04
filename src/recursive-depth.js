const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 1;
  isFirstCall = true;
  calculateDepth(arr) {
    if (this.isFirstCall) {
      arr.push(this.depth);
      this.isFirstCall = false
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arr[i].push(arr[arr.length - 1] + 1);
          let elDepth = this.calculateDepth(arr[i]);
          if (elDepth > this.depth) {
            this.depth = elDepth;
          }
        }
      }
      let tDepth = this.depth;
      this.depth = 1;
      this.isFirstCall = true;
      return tDepth;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arr[i].push(arr[arr.length - 1] + 1);
          let elDepth = this.calculateDepth(arr[i]);
          if (elDepth > this.depth) {
            this.depth = elDepth;
          }
        }
      }
      return arr[arr.length - 1];
    }
  }

};