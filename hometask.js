// ------------------------------------------------------------

// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// var num1 = 2;
// var num2 = 3;
// const num3 = 4;
// const num4 = 5;
// const multi = num1 * num2 * num3 * num4 ;
// console.log(multi);

// console.log(num1 * num2 * num3 * num4 );
// const num3 = 4;
// const num4 = 5;
// const multi = num1 * num2 * num3 * num4 ;
// console.log(multi);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// ******** ok *********
// var odd = 21;
// var even = 48 ;
// var mult_odd= odd * 2;
// console.log(mult_odd);
// var mult_even = even / 2;
// console.log( parseInt (mult_even));

// *****     02.   ok  Take a number *******

// var number = 48;
// var mult_odd= number * 2;
// var mult_even = number / 2;
// if ((number % 2) !== 0) {
//     console.log(mult_odd);
// }
// else{
// console.log(parseInt (mult_even));
// }

// -----------------------------------------------------------------------

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// var make_avg =

// ********------------------------------------
// 01
// Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

// var fruits = [ 'apple', 'banana', 'orange','lemon', 'guava'];
// console.log( fruits[3]);
// fruits[2] = 'jambura';
// console.log(fruits);
// ***************additional *************************
// var fruits_5 = fruits.push('pineaple', 'papya');
// console.log(fruits_5);
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.indexOf('orange'));
// console.log(fruits[2]);
// fruits[4] = 'mango'
// console.log(fruits);
// var x =fruits.pop();
// console.log(fruits);
// console.log(x);
// var y =fruits.pop();
// console.log(fruits);
// console.log(y);
// console.log(fruits);


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


// var tourist = [ 'sajek', 'bandarban', 'coxbazar'];
// console.log(tourist);
// var tourist_1 = ['vally', 'lalbag', 'sopnopuri']
// var favourite = tourist.concat(tourist_1);
// console.log(tourist.concat(tourist_1));
// var tourist_2 = ['khagrasori','tikatoli','alutila','richang'];
// var best =favourite.concat(tourist_2)
// console.log(best);
// console.log(best.length);
// best.pop();
// console.log(best);
// console.log(best.length);

// **********-----------**************************
// 3. Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

// if include , true
// var book = ['bangla','english','math','javascript'];
// book.includes('javascript');
// console.log(book.includes('javascript'));

// // if not include , false
// var book = ['bangla','english','math','javascript'];
// book.includes('mango');
// console.log(book.includes('mango'));
    

// ****-------------************-----------------------------

// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.


// var book = ['bangla','english','math','javascript'];
// var subject = 'EEE';
// var Age = 38;
// var number = [10, 20, 30, 40, 50, 55];
// //index    = [0 ,  1   2   3   4   5]

// console.log(Array.isArray(book));
// console.log(book);
// console.log(Array.isArray(Age));
// console.log(Age);
// console.log(Array.isArray(number));
// console.log(number);
// console.log(Array.isArray(subject));
// console.log(subject);


// *******-------------------**********************
// 5. Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

// var book = ['bangla','english','math','javascript'];
// var number = [10, 20, 30, 40, 50, 55];
// var new_array = book.concat(number);
// console.log(book);
// console.log(book.length);
// console.log(number);
// console.log(number.length);
// console.log(new_array);
// console.log(new_array.length);

// *******-------------*************------------*******

// ***********Add Two Numbers************
// var x = 5;
// console.log(x);
// var y = 7;
// console.log(y);
// var sum = x + y;
// console.log(sum);

///************----------*******************
// Count Number of Words in a String
// var words = "One Two Three Four";
// var countWords = words.split("\\s").length;
// console.log(countWords);

//************************************ */

// Check Whether a Number is Even or Odd

// var x = 25;
// if (x % 2 == 0) {
//     console.log('x' + " is even");
//     }
//     else{
//         console.log('x'   +  "is odd");
//     }

// Task-1:
// Count how many times a string has the letter a ?

// var letter = ['a','a','a','a','a','a','a','a','a','a','a']
// console.log(letter.length);

// ***********-----------*****************
// Task-2:
// Count how many times a string has the letter a or A

// var letter = ['A','a','a','a','A','a','a','A','a','a','A']
// letter.

// Task-5:
// Capitalize Every first Letter of each word in a String
// Converts all the alphabetic characters in a string to uppercase.
var bangladesh = 'i love my country bangladesh'
console.log(bangladesh.toUpperCase());
console.log(bangladesh.toLocaleUpperCase());
var motherland = 'I LOVE MY COUNTRY BANGLADESH';
console.log(motherland.toLowerCase());


