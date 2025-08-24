function binarySearch(srtdArr, target) {
    let left = 0; 
    let right = srtdArr.length -1; 

    while (left <= right) {
        let middle = Math.floor((left+right) / 2);
        let middleValue = srtdArr[middle];

        if (middleValue === target) {
            return middle;
        } else if (middleValue < target) {
            left = middle + 1;
        } else {
            right = middle - 1; 
        }
    }
    return -1;
}