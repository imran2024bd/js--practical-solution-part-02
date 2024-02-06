// function add(x,y) {
//     return x + y;
// }
// // console.log(add( 3 , 4));
// // console.log(add('imran', 5));
// console.log(add('5', 5));
// console.log(add( 5));


// function add(x,y) {
//     if( typeof x !== 'number' || typeof y !== 'number'){
//         return ' pls put correct number'
//     }
//     return x + y;
// }
// // console.log(add( '3' , 4));
// console.log(add( 3 , 4));


function printDetails(info) {
    return `my name is : ${info.name}. my age is ${ info.age}`;
    
}
console.log(printDetails({name: 'imran' , age : 36}));