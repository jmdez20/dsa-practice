function isPalindrome(s) {
    const cleanedString = s.lowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0; 
    let right = cleanedString - 1;

    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

