// my first attempt at doing anagrams

function isAnagram(a, b) {
    return a.split('').sort().join('') === b.split('').sort().join('')
}

// This is a larger version of the one liner above
function isNewAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    const wordOneSplit = word1.split('');
    const wordTwoSplit = word2.split('');

    wordOneSplit.sort();
    wordTwoSplit.sort();

    const sortedWordOne = wordOneSplit.join('');
    const sortedWordTwo = wordTwoSplit.join('');

    if (sortedWordOne === sortedWordTwo) {
        return true; 
    } else {
        return false;
    }
};