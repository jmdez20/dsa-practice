function groupAnagrams(words) {
    let groups = {};

    for (let word of words) {
        let signature = word.split('').sort().join('');

        if (!groups[signature]) {
            groups[signature] = [];
        }
        groups[signature].push(word)
    }
    return Object.values(groups);
}