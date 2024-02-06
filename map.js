// JavaScript Array map()
// Return a new array with the square root of all element values:
// const numbers = [4, 9, 16, 25];
// const result = numbers.map(Math.sqrt);
// console.log(result);


// Multiply all the values in an array with 10:

const numbers = [65, 44, 12, 4];
function multiplyBy10(num) {    
    return num * 10;
    
}
const newArr = numbers.map(multiplyBy10);
console.log(newArr);