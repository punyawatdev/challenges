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
    
function main() {
    const q: number = parseInt(readLine().trim(), 10);
    let s = '';
    const stack: string[] = [];
    stack.push(s);
    for (let i: number = 0; i < q; i++) {
        const line: string[] = readLine().replace(/\s+$/g, '').split(' ');
        const operation = parseInt(line[0]);
        const argument = line[1];
        switch (operation) {
            case 1:
                // append
                s += argument;
                stack.push(s);
                break;
            case 2:
                // delete last k characters
                s = s.substring(0, s.length - parseInt(argument));
                stack.push(s);
                break;
            case 3:
                // print kth character
                console.log(s.charAt(parseInt(argument) - 1));
                break;
            case 4:
                // undo last operation of case 1 or 2
                stack.pop();
                s = stack[stack.length - 1];
                break;
        }
    }
}
