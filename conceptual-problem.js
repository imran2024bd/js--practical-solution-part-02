// give the number is even or onloadeddata

// const x = 5;
// if( x % 2 === 0){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }


// function checkEvenodd(x) {
//     if( x % 2 === 0){
//         console.log('even');
//     }
//     else{
//         console.log('odd');
//     }
// }
// checkEvenodd(5);



// function checkEvenodd(x) {
//     if( x % 2 === 0){
//         return 'even'
//     }
//     else{
//         return 'odd'
//     }
// }
// const result = checkEvenodd(5);
// console.log(result);



// function printName(x) {
//     for (let i = 1; i <= x; i++){
//         console.log('Imran');      
//     }
// }
// printName(6);


// function printName(x) {
//     for (let i = 1; i <= x; i++){
//         console.log('Imran');      
//     }
// }
// // printName('5');
// printName('name')

// const numbers = [ 3, 12, 4 , 2 , 0, 53, 2, 5, 6 ]

// function findLarge(values) {
//     let largest = numbers[0];
//     for ( const number of numbers){
//         if( number > largest)
//         largest = number;
//     }
//     return largest;
// }

// const largest= findLarge(numbers);
// console.log(largest);

// 01

function AnaToVori(Ana) {
    if (typeof Ana !== 'number' || Ana < 0) {
        return ' provide a valid number'
    }
    else{
        const Vori = Ana * 0.0625;
    return Vori
    }
    
}
// console.log(AnaToVori(22));


// 02



// function PandaCost(singara , samucha , jilapi) {
//     const singaraPrice = 7
//     const samuchaPrice = 10
//     const jilapiPrice = 15

//     const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);
//     return total;
    
// }

// console.log(PandaCost(1,1,1)); 
// console.log(PandaCost(1,2,1)); 

// details of type of
function PandaCost(singara , samucha , jilapi) {
    if (typeof singara !== 'number'     ||  
    typeof samucha !== 'number'      || 
    typeof jilapi !== 'number')
     {
        return ' please provide a valid number'
     }
    else if ( singara <0 || samucha < 0 || jilapi <0) 
    {
        return ' positive number'
    }
    else {
        const singaraPrice = 7
        const samuchaPrice = 10
        const jilapiPrice = 15
        const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);
        return total;
    }
    
}

// console.log(PandaCost(1,1,1)); 
console.log(PandaCost(1,-2,1)); 




// problem # 03

// solve:

function PicnicBudget(participants) {
    if( typeof participants !== 'number'|| participants < 0 ){
        return ' positive '
    }
    else  {        
        let first100Cost = 0;
        let second101T200Cost = 0;
        let remainingCost = 0;
        let totalCost = 0;}
        if(participants <= 100){
            first100Cost = participants * 5000;
            return first100Cost;
        }
        else if(participants<=200){
          first100Cost = 5000 *100;
          second101T200Cost =( participants - 100)* 4000;
          total = first100Cost + second101T200Cost;
          return total;
        }
        else{
            first100Cost = 5000 *100;
            second101T200Cost = 4000*100;
            remainingCost = (participants- 200)* 3000;
            total = first100Cost + second101T200Cost + remainingCost;
            return total;
        }
    
}

console.log(PicnicBudget(102));





