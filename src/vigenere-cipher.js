const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const toAlhabet = 65;
const letterAtAlh = 26;
const letterA = 65;
const letterZ = 91;

class VigenereCipheringMachine {

  constructor(type) {
    this.type = type === false ? type : true;
    this.key = [];
    this.mes = [];
    this.newString = [];
  }

  encrypt(message, key) {
    this.fillElements(message, key);
    this.newString = this.mes.map((x, index) => x = ((x === ' ' || x < letterA) || x > letterZ) ? x : (x - toAlhabet + (this.key[index] - toAlhabet)) % letterAtAlh + toAlhabet);
    this.checkReverse();
    return String.fromCharCode(...this.newString);
  }
  decrypt(message, key) {
    this.fillElements(message, key);
    this.newString = this.mes.map((x, index) => x = ((x === ' ' || x < letterA) || x > letterZ) ? x : (((x - toAlhabet - this.key[index] - toAlhabet) % letterAtAlh) + letterAtAlh) % letterAtAlh + toAlhabet);
    this.checkReverse();
    return String.fromCharCode(...this.newString);
  }

  checkReverse() {
    if (!this.type)
      this.newString = this.newString.reverse();
  }


  fillElements(message, key) {
    if (!message || !key)
      throw new Error('Incorrect arguments!');

    this.key = Array.from(key.toUpperCase());
    this.mes = Array.from(message.toUpperCase());

    while (this.key.length < this.mes.length) {
      this.key.push(...this.key);
    }
    for (let i = 0; i < this.mes.length; i++) {
      if (this.mes[i] === " ")
        this.key.splice(i, 0, ' ');
    }
    this.key = this.key.map((x) => x = x.charCodeAt(0));
    this.mes = this.mes.map((x) => x = x.charCodeAt(0));
  }
}

module.exports = {
  VigenereCipheringMachine
};
