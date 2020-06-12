/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = matrix => {
  let results = [];

  if (matrix && matrix.length > 0 && matrix[0] && matrix[0].length > 0) {
    let rowBegin = 0;
    let colBegin = 0;
    let rowEnd = matrix.length - 1;
    let colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
      for (let i = colBegin; i <= colEnd; i++) {
        results.push(matrix[rowBegin][i]);
      }

      rowBegin++;

      for (let i = rowBegin; i <= rowEnd; i++) {
        results.push(matrix[i][colEnd]);
      }

      colEnd--;

      if (rowBegin <= rowEnd) {
        for (let i = colEnd; i >= colBegin; i--) {
          results.push(matrix[rowEnd][i]);
        }
      }

      rowEnd--;

      if (colBegin <= colEnd) {
        for (let i = rowEnd; i >= rowBegin; i--) {
          results.push(matrix[i][colBegin]);
        }
      }

      colBegin++;
    }
  }

  return results;
};
