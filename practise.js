// start from 28.01.2024  module = 17_4
// const salary = 25001;
// const isBcs = true;
// const height = 69;

// ------------------------------------------------
// if (salary > 20000 && height > 66) {
//     console.log(" good");
// }
// else {
//     console.log(" next");
// }

// -------------------------------------------------

// if (salary > 25000 || height > 66) {
//         console.log(" good");
//     }
//     else {
//         console.log(" next");
//     }

// ----------------------------------------------------------?
// if (salary > 25000 || height > 66 || isBcs == true) {
//     console.log(" good");
// }
// else {
//     console.log(" next");
// }

// console.log(typeof salary);
// console.log(typeof isBcs);

// var Name = 'Imran';
// var Age = 38;
// var male = true;
// var x = null;
// var y;

// console.log(typeof Name);
// console.log(typeof Age);
// console.log(typeof male);
// console.log(typeof x);
// console.log(typeof y);


// console.log(isNaN(29));
// console.log(isNaN("abc"));



var number = [10, 20, 30, 40, 50, 55];
//index    = [0 ,  1   2   3   4   5]
// to find index
// console.log(number.indexOf(40));
// console.log(number.indexOf(55));
// To find  number / value in an array of specified index
// console.log(number[2]);
// to find how many index number include in an array 
// console.log(number.length);
// to replace any value of an Array by index number
// number[5] = 60;
// console.log(number);
// To find index number  in an array of specified value
// console.log(number.indexOf(40));
 // To find  number in the array of a specified index
// console.log(number[2]);
// To add value in an array in last positioning 
// number.push(70,80,90,100);
// console.log(number);
// To Delete value in an array in last positioning
// number.pop(55);
// console.log(number);
// To Delete value in an array in first positioning
// number.shift();
// console.log(number);
// To add value in an array in first positioning
// number.unshift();
// console.log(number);
// Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(number.includes(70));
// console.log(number.indexOf(50));
// to find isArray
// console.log(Array.isArray(number));
// var age = 15;
// console.log(Array.isArray(age));
// Adds all the elements of an array into a string, separated by the specified separator string.
// apps =['insta' 'mess' 'google' 'youtube']
// apps.join('+');
// console.log(apps);
// concat() = Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// var age = [25, 30, 36, 65]
// number.concat(age);
// console.log(number);
// slice() = Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
// console.log(number);
// console.log(number.slice(1, 4));
// console.log(number.slice(2));
// var x =number.slice(0 ,2).concat(number.slice(5));
// console.log(x);

// splice method = splice () 1.  start , 2. deletecount 3. element1 4. element2

// var number = [10, 20, 30, 40, 50, 55];
// number.splice(2, 1);
// console.log(number);
// 30 number is delete

// number.splice(2, 3);
// console.log(number);
// 30, 40, 50 number is delete

// number.splice(4,2)
// console.log(number);

// number.splice(2, 1, 100 , 200);
// console.log(number);
//30 number is delete , then add 100 , 200 replacing 30

number.splice(2, 0, 100 , 200);
console.log(number);
//30 number is not delete , then add 100 , 200 before 30

// --------**********---------------
// includes () =>>>> Determines whether an array includes a certain element, returning true or false as appropriate.
// if include , true
// var book = ['bangla','english','math','javascript'];
// book.includes('javascript');
// console.log(book.includes('javascript'));

// // if not include , false
// var book = ['bangla','english','math','javascript'];
// book.includes('mango');
// console.log(book.includes('mango'));

// *************---------------************************
// Array.isArray() ;   Print the variable is Array or Not 

var book = ['bangla','english','math','javascript'];
var subject = 'EEE';
var Age = 38;
var number = [10, 20, 30, 40, 50, 55];
//index    = [0 ,  1   2   3   4   5]

console.log(Array.isArray(book));
console.log(Array.isArray(Age));
console.log(Array.isArray(number));

////***---------///////******-------- */



