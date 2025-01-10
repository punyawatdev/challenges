
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

fibonacci(10);
