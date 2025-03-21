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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    const period = s.slice(-2);
    let hour = parseInt(s.slice(0, 2), 10);
    const minuteSecond = s.slice(2, 8);
    if (period === 'AM') {
        if (hour === 12) {
            hour = 0; // midnight case
        }
    } else if (period === 'PM') {
        if (hour !== 12) {
            hour += 12; // convert PM hour to 24-hour
        }
    }
    const hourString = hour.toString().padStart(2, '0')
    return hourString + minuteSecond;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as PathLike);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
