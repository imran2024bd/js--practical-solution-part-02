const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];


function getMinprice(numbers) {
    // console.log(numbers);
    let min = prices[0];
    for ( const price of prices){
        // console.log(price);
        if ( price < min){
            min = price;
        }
    }
    return min;
}
const cheap = getMinprice(prices);
console.log(cheap);