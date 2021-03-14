function printCombos(a, x) {
  if (a == null || a.length == 0 || x > a.length) {
    return;
  }
  let buffer = new Array(x) ;
  printCombosHelper(a, buffer, 0, 0);
}

function printCombosHelper(a, buffer, startIndex, bufferIndex) {

  if (bufferIndex == buffer.length) {
    console.log(buffer);
    return;
  }

  if (startIndex == a.length) {
    return;
  }

  for (let i = startIndex; i < a.length; i++) {
    buffer[bufferIndex] = a[i];
    printCombosHelper(a, buffer, i + 1, bufferIndex + 1);
  }

}

printCombos([1, 2, 3, 4, 5], 3);

