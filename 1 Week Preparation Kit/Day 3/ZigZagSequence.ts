'use strict';

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

function findZigZagSequence(arr: number[]): void {
    console.log(arr);
}

function main() {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const t: number = parseInt(firstMultipleInput[0], 10);

    // const k: number = parseInt(firstMultipleInput[1], 10);

    const n: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    findZigZagSequence(n);
}
