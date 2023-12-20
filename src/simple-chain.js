const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = String(value);
    if (!value)
      value = '';
    this.chain.push(value);
    return this;
  },
  removeLink(position) {

    if (Number(position) !== +position || (position - 1 < 0 || position >= this.chain.length)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const array = this.chain;
    this.chain = [];
    return `( ${array.join(" )~~( ")} )`;
  }
};

module.exports = {
  chainMaker
};
