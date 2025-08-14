
function twoSum(arr) {
    const target = 9
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
    return 'nothing'
}

twoSum([1, 3, 4, 2, 7, 9])
// I know this is a brute force version, but im just learning. Will use hash map next step below


function twoSumTarget(arr, target) {
    // 1. Create an empty map object
    const map = {};
    // 2. Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // 3. Calculate complement
        const complement = target - arr[i];
        // 4. Check if complement exists in map
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        // 5. Store current number in map
        map[arr[i]] = i;
    }
    // 6. If no match found
    return 'nothing';
}

console.log(twoSumTarget([1, 3, 4, 2, 7, 9], 9)); // Should log [3, 4]