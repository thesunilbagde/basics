// [1,2,3,4,5,6]
function printCombos(a, buffer, startIndex, bufferIndex) {

  if (a.length < 1) {
    return;
  }
  if (bufferIndex == buffer.length) {
    console.log(buffer); return;
  }
  if (startIndex == a.length) {
    return
  }

  for (let i = startIndex; i < a.length; i++) {
    buffer[bufferIndex] = a[i];
    printCombos(a, buffer, i + 1, bufferIndex + 1);
  }
}
printCombos([1, 2, 3, 4, 5], [, , ,], 0, 0)
