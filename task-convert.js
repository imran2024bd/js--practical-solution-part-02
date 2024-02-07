// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.


function celciusTofarenheit(celcius) {
    const fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit;
    
}
// console.log(celciusTofarenheit(12));


// ### Task-2: 
// Write a function to convert Distance from miles to kilometer.

function milesTokm(miles) {
    const kilometer = 1.609344 * miles;
    return kilometer;
    
}
// console.log(milesTokm(2));

function kmTomiles(km) {
    const miles = 0.6213711922 * km ;
    return miles;
    
}
// console.log(kmTomiles(12));

// / ### Task-1: 
// Write a function to convert feet to inch.

function feetToinch(feet) {
    const inch = 12 * feet ;
    return inch;
    
}
// console.log(feetToinch(2));


function inchTofeet(inch) {
    const feet = 0.0833333333 * inch;
    return feet;
    
}

console.log(inchTofeet(36));