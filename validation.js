// normal function when we put a number
// function multiply(num1 , num2) {
//     const mult = num1 * num2;
//     return mult;
// }
// const mult = multiply( 3 , 7);
// console.log(mult);


// validation of arguments when we put  multiply( 'seven' , 7);

// step # 1 for num1
// function multiply(num1 , num2) {
//     // console.log(typeof (num1));
//     if ( typeof num1 !== 'number'){
//         return ' please provide a valid positive number'
//     }
//     const mult = num1 * num2;
//     return mult;
// }
// const mult = multiply( 5 , 'seven');
// // const mult = multiply( 'seven' , 7);
// // const mult = multiply( 5 , 7);
// console.log(mult);

// step # 2 for num1 & num2
// function multiply(num1 , num2) {
//     // console.log(typeof (num1));
//     // console.log(typeof (num2));
//         if ( typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return ' please provide a valid positive number'
//     }
//     const mult = num1 * num2;
//     return mult;
// }
// const mult = multiply( 5 , 'seven');
// // const mult = multiply( 'seven' , 7);
// // const mult = multiply( 5 , 7);
// console.log(mult);


// step # 3 complete validation for num1 & num2 in positive number & positive intiger

// function multiply(num1 , num2) {
//             if ( typeof num1 !== 'number' || typeof num2 !== 'number')
//             {
//         return ' please provide a valid positive number'
//     }
//     else if( num1 < 0 || num2 < 0){
//     return ' please provide a  positive intiger number'
//     }
//     const mult = num1 * num2;
//     return mult;
// }
// // const mult = multiply( -5 , -27);
// // const mult = multiply( -5 , 27);
// // const mult = multiply( 5 , -27);
// const mult = multiply( 5 , 27);
// console.log(mult);


// Validation of arguments when we put  string

// normal function when we put a string

// function fullName(first , last) {
//     const full = first + ' ' + last;
//     return full;
// }
// console.log(fullName( 'Imran' , 'Hossain'));


// step # 3 complete validation for  a string

// function fullName(first , last) {
//     // console.log(typeof(first));
//     if ( typeof first !== 'string' || typeof last !== 'string')       
//     {
//         return ' name should be a string';
//     }
//     const full = first + ' ' + last;
//     return full;
// }

// const name2 = fullName( 'imran' , 'hossain');
// // const name2 = fullName( 5 , 'hossain');
// // const name2 = fullName( 'imran' , 2);
// // const name2 = fullName( 7 , 2);
// console.log(name2);


// ***************************************************************************************

// Validation of arguments when we put object

const materials = { name: 'chulkani dandi', price: 35, color: 'blue'}
function getPrice(product) {
    // console.log(typeof (product));
    if ( typeof product !== 'object'){
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
    
}
const price = getPrice(materials);
// console.log(price);


// Validation of arguments when we put Array


function getsecond(numbers) {
    // console.log(typeof (numbers));
    // if ( typeof numbers !== 'object'){
    //     return ' please provide an array'
    // }
    if(Array.isArray !== false){
        return ' please provide an array'
    }
    const second = numbers[1];
    return second;
}
const second = getsecond(45 , 20);
// const second = getsecond(45 , 20);
// const second = getsecond([45 , 60 , 22 , 2, 3]);
console.log(second);


// https://github.com/ProgrammingHero1/js-problems-part2/blob/main/validation.js

// programming hero Coding


function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 'seven');
// console.log(result);

function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof second !== 'string') {
        return 'Second Name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Akmal')
// console.log(full);

function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}

// const price = getPrice({ name: 'chulkani dandi', price: 35, color: 'blue' })
const price = getPrice(5)
// console.log(price)

function getSecond(numbers) {
    if(Array.isArray(numbers) === false){
        return 'Please provide an array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([45, 61, 2])
console.log(second)
