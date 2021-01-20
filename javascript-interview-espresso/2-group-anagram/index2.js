function anagram(input) {
    let ht = {};
    for (let str of input) {
        let sorted = str.split("").join("");
        if (ht[sorted]) {
            ht[sorted].push(str);
        } else {
            ht[sorted] = [sorted];
        }
    }
    return Object.values(ht);
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagram(strs));
