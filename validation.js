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

function multiply(num1 , num2) {
            if ( typeof num1 !== 'number' || typeof num2 !== 'number')
            {
        return ' please provide a valid positive number'
    }
    else if( num1 < 0 || num2 < 0){
    return ' please provide a  positive intiger number'
    }
    const mult = num1 * num2;
    return mult;
}
// const mult = multiply( -5 , -27);
// const mult = multiply( -5 , 27);
// const mult = multiply( 5 , -27);
const mult = multiply( 5 , 27);
console.log(mult);
