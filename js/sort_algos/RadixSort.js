function getDigit(num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    let count = 0;

    while (num > 0) {
        count++;
        num = parseInt(Math.abs(num) / 10);
    }

    return count;
}

function mostDigits(arr) {
    let max = 0;
    for (let item of arr) {
        max = Math.max(max, digitCount(item));
    }

    return max;
}

function radixSort(arr) {
    let largest = mostDigits(arr);

   for (i = 0; i < largest; i++) {
    let buckets = Array.from({length: 10}, () => []);
    for (j = 0; j < arr.length; j++) {
        let pos = getDigit(arr[j], i);
        buckets[pos].push(arr[j]);
    }
    arr = [].concat(...buckets);
   }

   return arr;
}

console.log(radixSort([52632,5,21,362]));