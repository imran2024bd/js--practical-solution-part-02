/**
 * function takes an array as parameter
 * give me the average of the even numbers in the array
*/

/**
 * 1. put even numbers in an array
*/

function evenAverage(numbers) {
    const evens = [];
// console.log(numbers);
for ( const number of numbers){
    if (number % 2 === 0) {
        evens.push(number);
        // console.log(number);
        
    }
}
// evens is the array that contains only the even numbers 
//  console.log(evens);
let sum = 0;
for ( const number of evens){
    sum = sum + number;
}
const length = evens.length;
console.log(sum , length);
const avg = sum / length;
return avg;
   
}
const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = evenAverage(numbers);
console.log("average of the even numbers is:" , avg);