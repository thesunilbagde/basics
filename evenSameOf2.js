function cloneEvenNumbers(a) {
  if (a == null || a.length == 0) return a;
  let end = a.length;
  let i = getLastNumber(a);
  while (i >= 0) {
    if (a[i] % 2 == 0) {
      a[--end] = a[i];
    }
    a[--end] = a[i];
    i--;
  }
  return a;
}
function getLastNumber(a) {
  let i = a.length - 1;
  while (i >= 0 && a[i] == -1) {
    i--;
  }
  return i;
}

console.log(
  cloneEvenNumbers([1, 2, 5, 6, 8, , , ,]),
  
);
