const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {

      throw new CustomError('Not implemented');
      // remove line with error and write your code here
        /*let func = (arr, level = 0) => {
          if (arr instanceof Array) {
                return arr.map(function (value, index) {
                    return func(value, level + 1)
                }).max()
            }
            return level;
        }*/
    }
};