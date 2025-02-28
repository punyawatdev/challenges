
const fibonacci = (n: number) => {
    let n1 = 0;
    let n2 = 1;
    if (n === 0) {
        console.log('Invalid');
    } else if (n === 1) {
        console.log(n1);
    } else if (n === 2) {
        console.log(n1, n2);
    } else {
        let arr = [n1, n2];
        for(let i = 2; i < n; i++) {
            let n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
            arr.push(n3);
        }
        console.log(arr);
    }
};

const fibonacciFixedVersion = (n: number) => {
    if (n === 0) {
        console.log('Invalid input');
        return;
    }
    
    let arr = [0, 1];
    if (n === 1) {
        console.log([0]);
        return;
    }

    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    console.log(arr);
};

fibonacci(10);
fibonacciFixedVersion(10);
