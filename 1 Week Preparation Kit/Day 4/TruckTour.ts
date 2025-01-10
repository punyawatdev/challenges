'use strict';

import { count } from "console";
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
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps: number[][]): number {
    const n = petrolpumps.length;
    let totalGas = 0;
    let totalDistance = 0;
    let startIndex = 0;
    let currentGas = 0;

    for (let i = 0; i < n; i++) {
        let petrol = petrolpumps[i][0];  // Amount of gas available at the station
        let distance = petrolpumps[i][1];  // Distance to the next station

        totalGas += petrol;
        totalDistance += distance;

        // Update current gas at each step
        currentGas += petrol - distance;

        // If currentGas drops below 0, it means we can't start from 'startIndex' and must try the next station
        if (currentGas < 0) {
            startIndex = i + 1;  // Start the tour from the next station
            currentGas = 0;  // Reset the gas
        }
    }

    // If total gas is greater than or equal to total distance, return the starting index
    return totalGas >= totalDistance ? startIndex : -1;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as PathLike);

    const n: number = parseInt(readLine().trim(), 10);

    let petrolpumps: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        petrolpumps[i] = readLine().replace(/\s+$/g, '').split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
    }

    const result: number = truckTour(petrolpumps);

    ws.write(result + '\n');

    ws.end();
}
