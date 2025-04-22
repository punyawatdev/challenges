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

/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function noPrefix(words: string[]): void {
    const trie: { [key: string]: any } = {};
    let isBadSet = false;
    let badWord = '';

    for (const word of words) {
        let node = trie;
        let isPrefix = false;

        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            
            node = node[char];

            if (node.isEnd) {
                isPrefix = true;
            }
        }

        if (Object.keys(node).length > 0) {
            isPrefix = true;
        }

        node.isEnd = true; // Mark the end of the word

        if (isPrefix) {
            isBadSet = true;
            badWord = word;
            break;
        }
    }

    if (isBadSet) {
        console.log('BAD SET');
        console.log(badWord);
    } else {
        console.log('GOOD SET');
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    let words: string[] = [];

    for (let i: number = 0; i < n; i++) {
        const wordsItem: string = readLine();
        words.push(wordsItem);
    }

    noPrefix(words);
}
