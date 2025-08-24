function intersection(nums1, nums2) {
    let checklist = new Set(nums1);
    let sharedNumbers = new Set();

    for (let num of nums2) {
        if (checklist.has(num)) {
            sharedNumbers.add(num)
        }
    }
    return Array.from(sharedNumbers)
}