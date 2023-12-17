const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let countRepeat = 'repeatTimes' in options ? options['repeatTimes'] : 1;
  let separator = 'separator' in options ? options['separator'] : '+';
  let addition = 'addition' in options ? String(options['addition']) : '';
  let additionRepeatTimes  = 'additionRepeatTimes' in options ? options['additionRepeatTimes'] : 1;
  let additionSeparator  = 'additionSeparator' in options ? options['additionSeparator'] : '|';

  let addString = fillString(additionRepeatTimes, addition, additionSeparator);
  return fillString(countRepeat, str + addString, separator);

}
function fillString(count, str, separate){
  return Array(count).fill(str).join(separate);
}
module.exports = {
  repeater
};
