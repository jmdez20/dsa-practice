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

// or you can make this mmore simplified. Here's how: 

function isPalindrome(s) {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    const reversedString = cleanedString.split('').reverse().join('')

    return cleanedString === reversedString;
}