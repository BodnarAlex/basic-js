const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newArr = matrix.map((x) => x.map((y) => y = 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true)
        newArr = fillAround(i, j, newArr);
    }
  }
  return newArr;
}

function fillAround(i, j, newArr) {
  for (let k = -1; k <= 1; k++) {
    for (let l = -1; l <= 1; l++) {
      if ((i + k >= 0 && i + k <= 3) && (j + l >= 0 && j + l <= 3)) {
        if (!(k == 0 && l == 0))
          newArr[i + k][j + l]++;
      }
    }
  }

  return newArr;
}

module.exports = {
  minesweeper
};
