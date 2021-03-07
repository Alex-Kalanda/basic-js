const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor() {
        this.calculateDepth = this.calculateDepth.bind(this)
    }
    calculateDepth(array) {
        return 1 + (array instanceof Array
            ? array.reduce((max, item) => Math.max(max, this.calculateDepth(item)), 0)
            : -1);
    }
}

