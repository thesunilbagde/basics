// {} loop add entry to {} if ++ else new one

function firstUniue(str) {
  console.log("str", str);
  let hashTable = {};
  for (let s of str) {
    if (!hashTable[s]) {
      hashTable[s] = 1;
    } else {
      hashTable[s] = ++hashTable[s];
    }

    for (let s of str) {
      if (hashTable[s] == 1) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  console.log("hashTable", hashTable);
}

console.log(firstUniue("aaaroon"));
