function swap(arr, first, second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function dutchNatFlag1(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, low++, mid++);
    } else if (arr[mid] === 2) {
      swap(arr, mid, high--);
    } else if (arr[mid] === 1) {
      mid++;
    }
  }

  return arr;
}

let r = dutchNatFlag1([2, 2, 2, 0, 0, 0, 1, 1]);
console.log("r", r);
r = dutchNatFlag([3, 2, 1, 4, 6, 3, 7, 5]);
