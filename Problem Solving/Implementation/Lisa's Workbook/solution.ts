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
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n: number, k: number, arr: number[]): number {
    let specialProblems = 0;
    let page = 1;
    
    for(let i = 0; i < n; i++) {
        for(let j = 1; j < arr[i] + 1; j++) {
            if(j === page) {
                specialProblems += 1;
            }
            if(j % k === 0) {
                page += 1;
            }
        }
        if (arr[i] % k !== 0) {
            page += 1;
        }
    }
    
   return specialProblems;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as PathLike);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const k: number = parseInt(firstMultipleInput[1], 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number = workbook(n, k, arr);

    ws.write(result + '\n');

    ws.end();
}
