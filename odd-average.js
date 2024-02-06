// 21-4 Calculate The Average Of The Odd Numbers In An Array

/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/**
 * 1. put odd numbers in an array
*/

function oddAverage( numbers) {
    const odds = [];
// console.log(numbers);
for ( const number of numbers){
    if (number % 2 === 1) {
        odds.push(number);
        // console.log(number);
        
    }
}
// odds is the array that contains only the odd numbers 
//  console.log(odds);
let sum = 0;
for ( const number of odds){
    sum = sum + number;
}
const length = odds.length;
console.log(sum , length);
const avg = sum / length;
return avg;
   
}
const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log("average of the odd numbers is:" , avg);
