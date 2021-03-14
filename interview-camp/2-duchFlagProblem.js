function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}


function dutchNationalFlag(a, pivot) {
  let low_boundary = 0; let high_boundary = a.length - 1;
  let i = 0;
  while (i <= high_boundary) {
    if (a[i] < pivot) {
      swap(a, i, low_boundary); low_boundary++;
      i++;
    } else if (a[i] > pivot) {
      swap(a, i, high_boundary); high_boundary--;
    } else {
      i++;
    }
  }
  return a;
}


let a = dutchNationalFlag([5, 2, 4, 4, 6, 4, 4, 3], 4);
console.log("a", a);

a = dutchNationalFlag([2, 2, 2, 0, 0, 0, 1, 1], 1);

console.log("a", a);
