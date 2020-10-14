const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = isString(str);
  let _separator = defineSeparator(options.separator, '+');
  let _additionSeparator = defineSeparator(options.additionSeparator, '|');
  let newStr = new Array(options.repeatTimes);
  let _addition = '';

  if ('addition' in options) {
    _addition = addAddtition(options.addition, options.additionRepeatTimes, _additionSeparator);
  }
  let stringWithAddition = str + _addition;
  
  newStr.fill(stringWithAddition, 0);

  return newStr.join(_separator);
};

function addAddtition(addition, additionRepeatTimes, additionSeparator) {
  addition = isString(addition);
  return new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
}

function defineSeparator(separator, def) {
  if (separator != null) {
    return separator;
  } else {
    return def;
  }
}

function isString(value) {
  if (value == null) return 'null';
  return value.toString();
}