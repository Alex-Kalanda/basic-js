const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (sampleActivity == null || isNaN(sampleActivity) || (typeof(sampleActivity)) !== 'string') {
    return false
  }else if(+sampleActivity > 15 || +sampleActivity <= 0) {
    return false
  }else {
    return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693/HALF_LIFE_PERIOD))
  }
};
