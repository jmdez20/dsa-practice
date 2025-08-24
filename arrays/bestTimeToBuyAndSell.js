//had to rename the file as I renamed it something else. 


function maxProfit(prices) {
    if (!prices || prices.length === 0) return false;

    let cheapest_price_so_far = prices[0];
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i]; 

        if (currentPrice < cheapest_price_so_far) {
            cheapest_price_so_far = currentPrice;
        } else {
            let potentialProfit = currentPrice - cheapest_price_so_far;
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit
            }
        }
    }
    return maxProfit;
}