function sortScore(unorderedScores, highestPossibleScore) {
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
    unorderedScores.forEach((score) => {
        scoreCounts[score]++;
    });
    const sortedScores = [];
    for (let score = highestPossibleScore; score >= 0; score--) {
       // console.log("score", score);
        const count = scoreCounts[score]; 
        for (let time = 0; time < count; time++) {
            sortedScores.push(score);
        }
    }
    return sortedScores;
}

const unsortedScore = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;
let result = sortScore(unsortedScore, HIGHEST_POSSIBLE_SCORE);
console.log("result", result);
