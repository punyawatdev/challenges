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
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

const inputStack: number[] = [];
const outputStack: number[] = [];
   
function stackToQueue() {
    if (outputStack.length === 0) {
        while (inputStack.length > 0) {
            outputStack.push(inputStack.pop()!);
        }
    }
}
     
function processQueue(input: string[]) {
    if (input && input.length > 0) {
        switch (input[0]) {
        case '1':
            // enqueue
            inputStack.push(parseInt(input[1], 10));
            break;
        case '2':
            // dequeue
            stackToQueue();
            outputStack.pop();
            break;
        case '3':
            // print from front of queue
            stackToQueue();
            console.log(outputStack[outputStack.length - 1]);
            break;
        default:
            break;
        }
    }
}

function main() {
    const queries: number = parseInt(readLine().trim(), 10);
    for (let tItr: number = 0; tItr < queries; tItr++) {
        const q: string[] = readLine().replace(/\s+$/g, '').split(' ');
        processQueue(q);
    }
}
