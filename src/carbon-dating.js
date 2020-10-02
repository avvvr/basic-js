const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity = NaN) {
  if (typeof sampleActivity !== 'string' || isNaN(Number(sampleActivity)) || Number(sampleActivity) <= 0)
    return false;

  sampleActivity = Number(sampleActivity);

  let t=(Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693/HALF_LIFE_PERIOD);

  if(t<0) return false;

  return Math.ceil(t);
};