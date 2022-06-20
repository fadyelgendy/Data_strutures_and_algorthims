/**
 * store the first element as the min value
 * compare min to next value:
 *      if next value is less than min:
 *          make min equal next value
 * swap min value with the item started with
 * repeat
 *      
 */

function selectionSort(arr) {
    const swap = (arr, indx1, indx2) => {
        ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);
    }

    for (let i = 0; i < arr.length - 1; i++) { 
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        swap(arr, i, min);
    }

    return arr;
}

console.log(selectionSort([2,5,3,9,1,4,6]));