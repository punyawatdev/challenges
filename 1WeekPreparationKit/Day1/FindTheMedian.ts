/*
*
* Complete the 'findMedian' function below.
* The function is expected to return an INTEGER.
* The function accepts INTEGER_ARRAY arr as parameter.
*/

function findMedian(arr: number[]): number {
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);
    if (arr.length % 2 !== 0) {
        return arr[middle];
    } else {
        return (arr[middle - 1] + arr[middle]) / 2;
    }
}