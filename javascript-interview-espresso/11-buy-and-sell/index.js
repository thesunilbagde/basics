function buyAndSell(prices) {
    let low = Number.MAX_SAFE_INTEGER;
    let bestProfit = 0;

    for (let price of prices) {
        const profit = price - low;
        if (price < low) {
            low = price;
        }
        if (profit > bestProfit) {
            bestProfit = profit;
        }
    }
    return bestProfit;
}

let r = buyAndSell([7, 1, 5, 3, 6, 4]);
console.log("result", r);
