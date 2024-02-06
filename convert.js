// 21-2 Unit Convert Inch To Feet, Miles To Kilometre

// 12 inch 1 feet
    // 1 inch =  (1/12) feet

    function inchToFeet(inch) {
        const feet = inch / 12 ;
        return feet ;
    }
const shuvoHeight =  inchToFeet(75);
console.log(shuvoHeight);

// *************************************************
// Alternative way 2 inch_Feet
// to show 75 inch = 6 feet 3 inch

function inchToFeet2(inch) {
    const feetFraction = inch / 12 ;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);


// ***************************************************************************************
// mileToKilometer convert 
// 1 Mile = 1.60934 km

function mileToKilometer(mile) {
    const kilo = 1.60934 * mile ;
    return kilo ;
    
}
console.log(mileToKilometer(25));

// *******************************************
// kiloMeterToMiles

function kiloMeterToMiles( kilo) {
    const mile = kilo * 0.621371 ;
    return mile;
    
}
console.log(kiloMeterToMiles(21));