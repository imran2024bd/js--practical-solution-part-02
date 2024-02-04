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
console.log('max number is :' , max);
