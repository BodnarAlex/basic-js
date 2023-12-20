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
class VigenereCipheringMachine {

  constructor(type) {
    this.type = type === false ? type : true;
    this.key = [];
    this.mes = [];
    this.newString = [];
  }

  encrypt(message, key) {
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
    this.key = this.key.map((x) => x = String(x).charCodeAt(0));
    this.mes = this.mes.map((x) => x = String(x).charCodeAt(0));

    this.newString = this.mes.map((x, index) => x = ((x === ' ' || x < 65) || x > 91) ? x : (x - 65 + (this.key[index] - 65)) % 26 + 65);
    if(this.type){
      this.newString = this.newString;
    }else{
      this.newString = this.newString.reverse();
    }
    return String.fromCharCode(...this.newString);
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

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

    this.newString = this.mes.map((x, index) => x = ((x === ' ' || x < 65) || x > 91) ? x : (((x - 65 - this.key[index] - 65)% 26 ) +26) % 26 + 65);
    if(this.type){
      this.newString = this.newString;
    }else{
      this.newString = this.newString.reverse();
    }
    return String.fromCharCode(...this.newString);

  }

  fillElements(){

  }
}

module.exports = {
  VigenereCipheringMachine
};
