'use strict';

import { PathLike, WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData: number): void {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head === null) {
            this.head = node;
        } else {
            if (this.tail !== null) {
                this.tail.next = node;
            }
        }

        this.tail = node;
    }
}

function printSinglyLinkedList(node: SinglyLinkedListNode | null, sep: string, ws: WriteStream): void {
    while (node !== null) {
        ws.write(String(node.data));

        node = node.next;

        if (node !== null) {
            ws.write(sep);
        }
    }
}

function mergeLists(head1: SinglyLinkedListNode | null, head2: SinglyLinkedListNode | null): SinglyLinkedListNode | null {
    let dummy = new SinglyLinkedListNode(-1);
    let current = dummy;

    while (head1 !== null && head2 !== null) {
        if (head1.data < head2.data) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next;
    }

    // If one of the lists is not empty, append it to the merged list
    if (head1 !== null) {
        current.next = head1;
    } else {
        current.next = head2;
    }

    return dummy.next;
}

function main() {
    function main() {
        const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as PathLike);

        const tests = parseInt(readLine(), 10);

        for (let testsItr = 0; testsItr < tests; testsItr++) {
            const llist1Count = parseInt(readLine(), 10);

            let llist1 = new SinglyLinkedList();

            for (let i = 0; i < llist1Count; i++) {
                const llist1Item = parseInt(readLine(), 10);
                llist1.insertNode(llist1Item);
            }

            const llist2Count = parseInt(readLine(), 10);

            let llist2 = new SinglyLinkedList();

            for (let i = 0; i < llist2Count; i++) {
                const llist2Item = parseInt(readLine(), 10);
                llist2.insertNode(llist2Item);
            }

            let llist3 = mergeLists(llist1.head, llist2.head);

            printSinglyLinkedList(llist3, " ", ws)
            ws.write("\n");
        }

        ws.end();
    }
}