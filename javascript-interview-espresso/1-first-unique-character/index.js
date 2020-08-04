/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/

function firstUniueChat(str) {
    let charCount = {};
    for (s of str) {
        if (charCount[s]) {
            charCount[s]++;
        } else {
            charCount[s] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] == 1) {
            return i;
        }
    }
    return -1;
}

let result = firstUniueChat("leetcode");
console.log("result", result);
result = firstUniueChat("loveleetcode");
console.log("result", result);
