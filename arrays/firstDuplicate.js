const firstDuplicate = (arr) => {
    let seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return true;
        }
        seen.add(arr[i]);
    }
    return false;   // I just changed the return values
}; 

// I found a way to make this a lot shorter, into a one-liner. Check below ⬇️

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length; //if the size of Set does not equal nums.length, then it contains a duplicate
};

/// myy udnerstanding of it
