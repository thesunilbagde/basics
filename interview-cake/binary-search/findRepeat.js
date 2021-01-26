function findRepeat(numbers) {
    let floor = 1;
    let ceiling = numbers.length - 1;

    while (floor < ceiling) {
        let midpoint = Math.floor(floor + (ceiling - floor) / 2);

        let lowerRangeFloor = floor; // small
        let lowerRangeCeiling = midpoint; //
        let upperRangeFloor = midpoint + 1; // smaller edge ends + 1
        let upperRangeCeiling = ceiling;

        const distinctPossibleIntegersInLowerRange =
            lowerRangeCeiling - lowerRangeFloor + 1;

        let itemInLowerRange = 0;
        numbers.forEach((item) => {
            if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
                itemInLowerRange += 1;
            }
        });
        if (itemInLowerRange > distinctPossibleIntegersInLowerRange) {
            floor = lowerRangeFloor;
            ceiling = lowerRangeCeiling;
        } else {
            floor = upperRangeFloor;
            ceiling = upperRangeCeiling;
        }
    }
   return floor;
}

actual = findRepeat([1, 2, 4, 5, 4, 5]);
console.log("actual", actual);
