/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    s = s
        .replace(/[^\w]/gi, "")
        .replace("_", "")
        .toLowerCase();
    console.log("s", s);
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let result = isPalindrome("A man, a plan, a canal: Panama");

console.log("result", result);

result = isPalindrome("race a car");
console.log("result", result);

result = isPalindrome("ab_a");
console.log("result", result);
