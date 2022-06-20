/**
 * Pivot helper function
 * takes an array, starting index, ending index
 * returns the pivot index, after swapping it to the right place
 */
function pivot(arr, start = 0, end = arr.length) {
    const swap = (arr, idx1, idx2) => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }

    let pivot = start;
    let pivotIdx = start;

    for (let i = start + 1; i < end; i++) {
        if (arr[pivot] > arr[i]) {
            pivotIdx++;
            swap(arr, i, pivotIdx);
        }
    }

    swap(arr, pivot, pivotIdx);

    return pivotIdx;
}

/**
 *  
 */
function quickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        let pivotidx = pivot(arr, left, right);
        quickSort(arr, left, pivotidx);
        quickSort(pivotidx, right);
    }
    return arr;
}
let arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(arr, 0, arr.length)); // 4