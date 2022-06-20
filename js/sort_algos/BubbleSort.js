/**
 * start looping from the end of the array towrads the begining with a veriable called i 
 * start an inner loop with a variable called j from the beginning util i -1
 * if arr[j] is greater than arr[j +1], swap those values
 * return sorted array 
 */

function bubbleSort(arr) {
    let swaps;
    for (let i = arr.length - 1; i > 0; i--) {
        swaps = true;
        for (let j = 0; j <= i - 1; j++) {
            console.log(arr);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
                swaps = false;
            }
        }
        if (swaps) break;
    }
 
    return arr;
}

console.log(bubbleSort([1,2,3,4,5,6,8,7,9]));