function removeDuplicate(nums) {
    let janitor = 0;

    for (let explorer = 1; explorer < nums.length; explorer++) {
        if (nums[explorer] !== nums[janitor]) {
            janitor ++;
            nums[janitor] = nums[explorer]
        }
    }
    return janitor + 1;
}