/**
 * SIMPLE LOGIC:
 * year will be e leap year if the year is divisible by 4
*/
 
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else{
        return false
    }    
}
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2025));

/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2. if the year is divisible by 400, then it is a leap year
 * 3. else it is not a leap year
*/

function isLearYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true ;
    }
    else if(year % 100 ===0 && year % 400 ===0) {
        return true;

    }
    else{
        return false;
    }
    
}

console.log(isLearYear2(2100));
console.log(isLearYear2(2400));
console.log(isLearYear2(1900));
console.log(isLearYear2(2052));