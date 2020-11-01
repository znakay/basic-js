const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let maxDepth = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        depth = 1 + this.calculateDepth(element);
        maxDepth = depth > maxDepth ? depth : maxDepth;
      }
    });

    return maxDepth;
  }
};