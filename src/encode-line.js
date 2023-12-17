const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let count = 1;
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    } else {
      if (count != 1){
        newStr += count
      }

      newStr += letter;
      letter = str[i];
      count = 1;
    }

  }
  if (count != 1){
    newStr += count
  }

  newStr += letter;
  return newStr;
}

module.exports = {
  encodeLine

};
