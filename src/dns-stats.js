const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let concat = '';
  let info = domains.map((x) => x.split('.')).map((y) => y.reverse()).forEach(function (currentElement, index) {
    for (let i = 0; i < currentElement.length; i++) {
      concat += '.' + currentElement[i];
      if (concat in res)
        res[concat]++;
      else
        res[concat] = 1;
    }
    concat = '';
  })
  return res;
}

module.exports = {
  getDNSStats
};
