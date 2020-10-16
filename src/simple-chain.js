const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value == null) {
      value = '( null )';
    } else {
      value = '( ' + value.toString() + ' )';
    }
    this.result.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.result.length ||
      typeof position != 'number'
    ) {
      this.result = [];
      throw new Error();
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let chain = this.result.join('~~');
    this.result = [];
    return chain;
  }
};

module.exports = chainMaker;
