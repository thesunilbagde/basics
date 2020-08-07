/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let stack = [];
    let pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length == 0) {
                return false;
            }
            let last = stack.pop();
            if (pairs[last] !== char) {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
}

let result = isValid("()[]{}");

console.log("result", result);
result = isValid("(]");
console.log("result", result);
