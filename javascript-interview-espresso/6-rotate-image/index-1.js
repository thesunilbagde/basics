/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  let N = matrix.length;

  for (let i = 0; i < N; i++) {
    for (let j = i; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < (N / 2); j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][N-1-j];
        matrix[i][N-1-j] = temp;
      }
    }
  }
}

let result = rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log("result", result);

result = rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
console.log("result", result);
