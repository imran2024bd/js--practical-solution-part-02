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
// console.log(cheap);


// *****************************************************************

const phones =[
    {name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'walton', price: 31000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
]

function getCheapestPhone(phones) {
    // console.log(phones);
    let min = phones[0];
    for( const phone of phones){
        // console.log(phone);
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min ;
}

// const cheapestPhone = getCheapestPhone(phones);
// console.log(cheapestPhone);


// ********************************************

// max phone price

function getHighestPhone(phones) {
    // console.log(phones);
    let max = phones[0];
    for( const phone of phones){
        // console.log(phone);
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max ;
}

const highestestPhone = getHighestPhone(phones);
console.log(highestestPhone);