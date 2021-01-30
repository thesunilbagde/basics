function findDuplicate(intArray) {

  const n = intArray.length - 1;

  let positionInCycle = n+1;

  for(let i = 0; i < n; i++) {
       positionInCycle = intArray[positionInCycle - 1]

  }

  const rememberedPositionCycle = positionInCycle;

  let currentPositionInCycle = intArray[positionInCycle -1];
  let cycleStepCount = 1;

  while(currentPositionInCycle !== rememberedPositionCycle) {
    currentPositionInCycle = intArray[currentPositionInCycle - 1];

    cycleStepCount += 1;
  }
  let pointStart = n+1;
  let pointAhead = n + 1;

  for(let i = 0; i < cycleStepCount; i++) {
     pointAhead = intArray[pointAhead - 1];
  }

  while(pointStart !== pointAhead) {
     pointStart = intArray[pointStart - 1];
     pointAhead = intArray[pointAhead - 1];
  }



  // Find a number that appears more than once ... in O(n) time


  return pointStart;
}




let actual  = null;
 // actual= findDuplicate([1, 2, 5, 5, 5, 5]);
actual = findDuplicate([4, 1, 4, 8, 3, 2, 7, 6, 5])
console.log("actual", actual);
