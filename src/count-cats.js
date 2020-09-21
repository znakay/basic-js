const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.map(array => {
    return array.filter(item => item == '^^').length;
  })
  .reduce((sum, current) => sum + current, 0);
};
