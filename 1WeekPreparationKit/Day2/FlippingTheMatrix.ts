/*
*
* Complete the 'flippingMatrix' function below.
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY matrix as parameter.
*/

function flippingMatrix(matrix: number[][]): number {
    const n = matrix.length;
    const half = n / 2;
    let sum = 0;
    for (let i = 0; i < half; i++) {
        for (let j = 0; j < half; j++) {
            const v1 = matrix[i][j];
            const v2 = matrix[i][n - 1 - j];
            const v3 = matrix[n - 1 - i][j];
            const v4 = matrix[n - 1 - i][n - 1 - j];
            sum += Math.max(v1, v2, v3, v4);
        }
    }
    return sum;
}