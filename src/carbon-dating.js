const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity == 'number' && !isNaN(sampleActivity) && sampleActivity > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 * HALF_LIFE_PERIOD));
  } 
  return false;
};
