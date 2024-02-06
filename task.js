// js-problems-part2-practice-tasks
// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
// function lowestNum(numbers) {
//     let min = heights2[0];
//     for ( const number of numbers){
//         // console.log(number);
//         if(number < min ){
//              min = number;
//              return min;
//         }
//     }
    
// }
// const min = lowestNum(heights2);
// console.log(min);

// Task -2:
// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(nameList)  {
    for ( const name1 of nameList){
        // console.log(name1);
        // const length = name1.length(heights2[0]);
        let length = [];
        for (let i = 0; i < nameList.length; i++) {
            // console.log(i);
            const length = nameList[i].length;
           const lResult= length.push();
            
        }
        return lResult;
    }
    
}
console.log(smallestName(heights2));


// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// function calculateElectronicsBudget(laptop, tablets, mobile) {
//     const perLaptop = 35000;
//     const perTablet = 15000;
//     const perMobile = 20000;
//     const totalMoney = (laptop * perLaptop) + (tablets * perTablet) + (mobile * perMobile);
//     return totalMoney;
    
// }
// const totalcost = calculateElectronicsBudget(1,1,1);
// console.log(totalcost);


// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];
// function findAveragePhonePrice(price) {
//     // console.log(price);
//     for ( const phone of phones){
//         // console.log(phone);
//         const length = phones.length;
//         // return length;
//         const phoneAprice = phones[0].price ;
//         const phoneBprice = phones[1].price ;
//         const phoneCprice = phones[2].price ;
//         const phoneDprice = phones[3].price ;
//         const phoneEprice = phones[4].price ;
//         const phoneFprice = phones[5].price ;
//         const totalPhoneprice = phoneAprice + phoneBprice + phoneCprice + phoneDprice+ phoneEprice +phoneFprice;
//         const findAveragePhonePrice = totalPhoneprice / length;              
//         return findAveragePhonePrice;
//     }
// }
// console.log(findAveragePhonePrice(phones));

// // console.log(findAveragePhonePrice(phones));
// console.log(phones.length());

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];

