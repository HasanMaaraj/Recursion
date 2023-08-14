const mergeSort = arr => {
    if (arr.length ==1) return arr
    const merge = (leftArr, rightArr) => {
        let result = [];
        let iRight = 0;
        let iLeft = 0;
        while (iLeft < leftArr.length && iRight < rightArr.length) {
            if (leftArr[iLeft] < rightArr[iRight]) {
                result.push(leftArr[iLeft]);
                iLeft++
            } else {
                result.push(rightArr[iRight]);
                iRight++
            }
        }

        while (iLeft < leftArr.length) {
                result.push(leftArr[iLeft]);
                iLeft++
        }

        while (iRight < rightArr.length) {
                result.push(rightArr[iRight]);
                iRight++
            }
            return result
    }

    let left = arr.slice(0, Math.floor(arr.length/2));
    let right = arr.slice(Math.floor(arr.length/2));
    return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort([4,34,57,133,6,84,74,7453,4746,36,5,4,7,3,83,35,35])) // [3, 4,  4,  5, 6, 7, 34, 35, 35,  36, 57, 74, 83, 84, 133, 4746, 7453]