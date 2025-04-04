'use strict';

import { PathLike, WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr: number[][]): number {
    let maxSum = -Infinity;
    // 6x6 matrix, start from 1 to 4 to avoid out of bound
    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 5; j++) {
            const top = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1];
            const middle = arr[i][j];
            const bottom = arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
            
            const hourglass = top + middle + bottom;
            
            // Update the maximum hourglass sum
            if (hourglass > maxSum) {
                maxSum = hourglass;
            }
        }
    }
    
    return maxSum;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as PathLike);

    let arr: number[][] = Array(6);

    for (let i: number = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
