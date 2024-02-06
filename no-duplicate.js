/**
 * array has some duplicate elements
 * []
*/

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

// find duplicate elements of biryaniKhor

// function noDuplicate(array) {
//     // console.log(array);
//     let unique = [];
//     for( const item of array){
//         if (unique.includes(item) === false){
//             unique.push(item);
//         }
//     }
//     return unique;
    
// }
// const uniqueArray = noDuplicate(biryaniKhor);
// console.log(uniqueArray);

// find duplicate elements of numbers 

function noDuplicateNumbers(array) {
    // console.log(array);
    let uniqueNumber = [];
    for ( const number of numbers){
        // console.log(number);
        if (uniqueNumber.includes(number) === false) {
            uniqueNumber.push(number);  
        }
    }
return uniqueNumber;    
}
// console.log(noDuplicateNumbers(numbers));
const unique = noDuplicateNumbers(numbers);
console.log(unique);


