// Add the numbers
function add(num1 , num2) {
    const sum = num1 + num2;
    console.log('The sum of two number:' , sum);
}
add(2, 3);
************************************************************************
// Add multiple  numbers
function addALL(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log('total of multiple  numbers ' , total);
    
}
addALL( 2, 3, 5 , 6 , 14);

***********************************************************************
//

// square of a number
function square(number) {
    sqr = number * number ;
    console.log('The square of this number is: ' , sqr);
}
square(4);
square(5);
square(450);

// a number  doubleIt
function doubleIt(number) {
    const doubled = number * 2 ;
    console.log(number , doubled);
}
console.log( ' I will call the function');;
doubleIt(15);
console.log('--------------------------');
doubleIt(88);
console.log('--------------------------');
doubleIt(873);
const money = 112;
doubleIt(money);

// difference the two number

function difference(num1 , num2) {
    const diff = num1 - num2 ;
    console.log(num1, num2 , ' difference is' , diff);
}

const fatherAge = 57 ;
const myAge = 38;
difference(fatherAge , myAge);

**
 * create function that will return only the even numbers
 * return the sum of even numbers
*/


function evenNumbersOnly(numbers) {
    // console.log(numbers);
    const evens = [];
    for(const number of numbers){
        if( number % 2 === 0){
            console.log(number);
            evens.push(number)
        }
    }
    return evens;
}
const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
console.log(evens);


/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function  is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
*/

// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (const number of numbers ){
//         console.log(number);
//         sum = sum + number;
//     } 
//     return sum ;
// }
// const numbs = [54, 62, 12, 6];
// const sum = sumOfNumbers(numbs);
// console.log('sum of numbers is' , sum);


/**
 * for a given string tell me whether it has even number of characters or not
 * 
*/
// function evenSizedString(str) {
//     const size = str.length;
//     console.log(str , size);
//     if (size % 2 === 0)  {
//         console.log('even size');
//     }
//     else{
//         console.log('Odd size');
//     }
    
// }
// evenSizedString('Dhaka');
// evenSizedString('faka');

//**************************************************************************************
// sum of the even numbers

// function evenNumbersOnly(numbers) {
//     // console.log(numbers);
//     const evens = [];
//     for(const number of numbers){
//         if( number % 2 === 0){
//             console.log(number);
//             evens.push(number)
//         }
//     }
//     return evens;
// }
const numbers = [5, 8, 91, 24, 6];

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for ( const number of numbers){
       if (number % 2 ===0){
        console.log(number);
        sum = sum + number;
       }
    }
    return sum;   
}
const sum = sumOfEvenNumbers(numbers);
console.log( 'sum of the even numbers is' ,  sum);