/**
 * start the second elem of arr
 * compare to the element before, swap if needed
 * iterate to place each element in the sorted half.
 */

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i -1 ; j >= 0 && arr[j] > current; j--) {
           if (arr[j] > current) {
               arr[j + 1] = arr[j];
               jIndex = j;
           }
        }

        arr[j + 1] = current;
    }

    return arr;
}

console.log(InsertionSort([5,6,2,8,9,1,7,3,1,5,4,8,6,5]));