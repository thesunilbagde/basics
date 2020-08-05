function groupAnagrams(strs) {
  let group = {};
    for(let str of strs) {
      let  key = str.split("").sort().join("");
       if(group[key]) {
           group[key].push(str)
       } else {
         group[key] =[str];
       }

   }
        return Object.values(group);
}


let result  = groupAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]);

console.log("result", result);
