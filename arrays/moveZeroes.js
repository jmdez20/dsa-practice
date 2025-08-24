function moveZeroes(nums) {
    let plow = 0;

    for (let inspector = 0; inspector < nums.length; inspector++) {
        if (nums[inspector] !== 0) {
            nums[plow] = nums[inspector];
            plow++;
        }
    }

    for (let i = plow; i < nums.length; i++) {
        nums[i] = 0;
    }
}

