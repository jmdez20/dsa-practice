function validParens(s) {
    const stack = []; 
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            stack.push(char)
        } else {
            const lastOpen = stack.pop()
            if (map[lastOpen]) return false;
        }
    }
    return stack.length === 0;
}