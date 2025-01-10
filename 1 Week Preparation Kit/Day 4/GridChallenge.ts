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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid: string[]): string {
    const sortedGrid = grid.map(row => row.split('').sort().join(''));
    for(let col = 0; col < sortedGrid[0].length; col++) {
        for(let row = 1; row < sortedGrid.length; row++) {
            if (sortedGrid[row][col] < sortedGrid[row - 1][col]) {
                return 'NO';
            }
        }
    }
    return 'YES';
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as PathLike);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        let grid: string[] = [];

        for (let i: number = 0; i < n; i++) {
            const gridItem: string = readLine();
            grid.push(gridItem);
        }

        const result: string = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
