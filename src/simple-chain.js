const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  separator: '~~',

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain = [...this.chain, `( ${value} )`]
    return this
  },
  removeLink(position) {
    if (position < this.chain.length && position >=0) {
      this.chain.splice(position-1,1)
      return this
    }else {
      this.chain = []
      throw 'Crash chain!'
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let outputChain = this.chain.join(this.separator)
    this.chain = []
    return outputChain
  }
}

module.exports = chainMaker;
