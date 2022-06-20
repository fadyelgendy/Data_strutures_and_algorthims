function binarySearch(arr, val) {
    let lo = 0;
    let hi = arr.length - 1;
    let mid = Math.floor((lo + hi) / 2);

    while (lo < hi) {
        if (arr[mid] > val)
            hi = mid - 1;
        else lo =
            mid + 1;

        mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === val) return mid;
    }

    // not Found
    return -1;
}

// test case
console.log(binarySearch([3, 5, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log(binarySearch([3, 5, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // 16