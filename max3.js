// const jim = 256;
// const tim = 389;
// const kim = 168;

// if (jim > tim && jim > kim) {
//     console.log('jim');
    
// }
// else if (tim > jim && tim > kim) {
//     console.log('tim');
    
// }
// else{
//     console.log('kim');
// }


// inside a function
function maxOfThree (num1, num2, num3) {
    if (num1> num2 && num1 > num3) {
        return num1
    }
    else if (num2 > num3 && num2 > num1) {
        return num2        
    }
    else{
        return num3
    }
}

const maxNumber = maxOfThree( 65, 115 , 9)
// console.log(maxNumber);

// inside a Math function

const max = Math.max(2, 3, 2555, 56 ,98 ,98 ,87 ,96 ,102 ,105);
console.log(max);