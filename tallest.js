const heights = [65, 66, 68, 72, 78, 60, 65, 66];
// console.log(Math.max(heights));

// inside a function
function getMax(numbers) {
    // console.log(numbers);
    let max = numbers[0];
    for ( const num of numbers){
        // console.log(num);
        if (num > max) {
            max = num;
        }
    }
    return max;
    
}
const max = getMax(heights);
// console.log('max number is :' , max);


// homework: min number

function getMin(numbers) {
    // console.log(numbers);
    let min = numbers[0];
    for ( const item of numbers){
        // console.log(item);
        if (item < min) {
               min = item;        
        }
        
    }
    return min
    
}
const min = getMin(heights);
console.log(min);
