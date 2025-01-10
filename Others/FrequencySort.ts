
const arr: number[] = [1, 1, 2, 5, 2, 3];
console.log(arr);

type NumberArray = {
  [index: number]: number;
}

const frequencySort = (arr: number[] = []) => {
   let map: NumberArray = {};
   for (let i = 0; i < arr.length; i++) {
      map[arr[i]] = (map[arr[i]] || 0) + 1;
   };
   return arr.sort((a, b) => map[a] - map[b] || a - b);
};

frequencySort(arr);
console.log('result ' + arr);
