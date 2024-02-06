// Add the numbers
// function add(num1 , num2) {
//     const sum = num1 + num2;
//     console.log('The sum of two number:' , sum);
// }
// add(2, 3);


// square of a number
// function square(number) {
//     sqr = number * number ;
//     console.log('The square of this number is: ' , sqr);
// }
// square(4);
// square(5);
// square(450);


// Add multiple  numbers
// function addALL(a, b, c, d, e) {
//     const total = a + b + c + d + e;
//     console.log('total of multiple  numbers ' , total);
    
// }
// addALL( 2, 3, 5 , 6 , 14);



// 20-3 How Function Works And Argument Vs Parameters

// a number  doubleIt
// function doubleIt(number) {
//     const doubled = number * 2 ;
//     console.log(number , doubled);
// }
// console.log( ' I will call the function');;
// doubleIt(15);
// console.log('--------------------------');
// doubleIt(88);
// console.log('--------------------------');
// doubleIt(873);
// const money = 112;
// doubleIt(money);

// difference the two number

// function difference(num1 , num2) {
//     const diff = num1 - num2 ;
//     console.log(num1, num2 , ' difference is' , diff);
// }

// const fatherAge = 57 ;
// const myAge = 38;
// difference(fatherAge , myAge);


// 20-4 Function Return And Set Return Value To A Variable

// function tenTimes (number) {
//     const result = number * 10 ;
//     return result;
// }

//  function cutHalf(number) {
//     const half = number / 2 ;
//     return half ;
//  }
//  tenTimes(5);
//  const output = tenTimes(5);
//  console.log( 'output', output);
//  const bigNumber = tenTimes(99);
//  console.log(bigNumber);


//************************************ 20-5 Recap And Conditional Return Of Odd And Even



// function doMath(num1 , num2) {
//     const sum = num1 + num2 ;
//     const difference =  num1 - num2 ;
//     const multiply = sum * difference ;
//     const result =  multiply / 2 ;
//     return result;
// }

// const result = doMath (10 , 5)
// console.log(result);


// return on a conditional basis
// Conditional Return
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(50));
// console.log(isEven(105));

// **************************************************************
// function isOdd(number) {
//     if (number % 2 === 1) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isOdd(203));


// **************************** Different Types Of Parameters Of A Function

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

// **************************************************************************

// function doubleOrTriple(number , doDouble) {
//     if (doDouble === true) {
//         const result = number * 2;
//         return result;
//     }
//     else{
//         const result = number * 3;
//         return result;
//     }
// }

// console.log(doubleOrTriple(5 , true));
// console.log(doubleOrTriple(5 , false));

// array
// function numberOfElements(numbers){
//     const len = numbers.length;
//     return len;
// }

// numberOfElements([12, 45, 78,45,121254,4,5])

// // *************************************************************

// function getAge(person){
//     const age = person.age;
//     return age;
// }


// **************        20-7 Sum Of All Numbers In An Array Using Function

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



//***********20-8 Return All The Even Numbers Of An Array */

/**
 * create function that will return only the even numbers
 * return the sum of even numbers
*/

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
// const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log(evens);



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
// const numbers = [5, 8, 91, 24, 6];

// function sumOfEvenNumbers(numbers) {
//     let sum = 0;
//     for ( const number of numbers){
//        if (number % 2 ===0){
//         console.log(number);
//         sum = sum + number;
//        }
//     }
//     return sum;   
// }
// const sum = sumOfEvenNumbers(numbers);
// console.log( 'sum of the even numbers is' ,  sum);


