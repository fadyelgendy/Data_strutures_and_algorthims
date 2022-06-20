/**
 * Mergin two arrays
 * array must be sorted
 */
function merge(arr1, arr2) {
    let sorted = [];

    let first_pointer = 0;
    let second_pointer = 0;

    while (first_pointer < arr1.length && second_pointer < arr2.length) {
        if (arr1[first_pointer] < arr2[second_pointer]) {
            sorted.push(arr1[first_pointer]);
            first_pointer++;
        } else {
            sorted.push(arr2[second_pointer]);
            second_pointer++;
        }
    }

    while (first_pointer < arr1.length) {
        sorted.push(arr1[first_pointer]);
        first_pointer++;
    }

    while (second_pointer < arr2.length) {
        sorted.push(arr2[second_pointer]);
        second_pointer++;
    }

    return sorted;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([1,3,5,2,4,6,8]));
console.log(mergeSort([1,3,5,7,2,4,6,8,10]));