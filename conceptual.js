// var Name = 'Imran';
// var Age = 38;
// var male = true;
// var x = null;
// var y;

// console.log( typeof Name);
// console.log( typeof Age);
// console.log( typeof male);
// console.log( typeof x);
// console.log( typeof y);




//********** Naming of variables  ==  can not use reserve keyword ************ */
// var x = 5;
// var var = 6;   'var'  //is not allowed as a variable declaration name.t
//  var function = 10; can not use
// var return = 5 ; can not use


// var my-address = 'Rajshahi';   can not use

// var age = 15;
// var firstNameMy = 'Imran';   // for multiple key fo var name
// var first_name_My = 'Imran'; // always use small word at first
// var num1 = 5;
// var num2 = 10;
// var 

// operators of mathmatical ///////

// var x = 2;
// var y = 3;
// var total = x + y + 9;
// console.log(total);

// var minus = total - 10;
// console.log(minus);

// var multiple = minus * 2
// console.log(multiple);

// var divide = multiple / x;
// console.log(divide);

// use of modulus (%)   //

// 

// 20 % 4 = 3
// 4 % 7 =  4

//****************** */ mathmatical shorthand  **************

// var x = 5;
// // x = x + 5;
// // 
// // x = x - 2;
// x -= 2 ;

// console.log(x);

// var number = 19.243;

// var a = "20";
// console.log(typeof a);
// var converted = parseInt(a);
// console.log(converted);
// console.log(typeof converted);

// console.log(3 + '4');
// console.log( true + 3);

// var x = 4.532689;
// console.log(typeof x);
// var covert = x.toFixed(3);
// console.log(5 + parseFloat(covert));
// console.log(typeof covert);


// isNaN = Not a Number , true = not a number to convert a number  

// console.log(isNaN(29));
// console.log(isNaN("abc"));

// if else use
// var x = 5;

// if (x > 10) {
//     console.log(" x is greater than 10");
// }
// else{
// console.log(' x is smaller than 10');
// }

// var abc = 30;

// if (abc !== 30) {
//     console.log(' equal to 10');
// }
// else{
//     console.log(' not equal to 10');
// }
// var temperature = 25;

// if (temperature > 10) {
//     console.log();
// }
// else if (condition) {
    
// }
// else if (condition) {
    
// }
// else{

// }

// console.log(!(10 === 1));

// console.log(10 === '10');

// --------------------------------******************************************
/

// var x = 5;
// var name = "Imran";
// var male = true;

// var number = [10, 20, 30, 40, 50, 55];

// console.log(number[2]);
// number.push(70,80,90,100);  /// last add
// number.pop();     // last del

// var number = [10, 20, 30, 40, 50, 55];
// number.shift();  /// first element out
// number.unshift(); /  first element add

// *************------------------------


var number = [10, 20, 30, 40, 50, 55];

// to search index of 40
// console.log(number.indexOf(40));
// console.log(number.indexOf(110));  if result -1 then this is not exist
// console.log(number.length - 1);  to search last element of index

// slice ()
// console.log(number.slice(1, 4));
// console.log(number.slice(2));

// var x =number.slice(0 ,2).concat(number.slice(5));
// console.log(x);


// -------------------------------------------------------------------

// splice method = splice () 1.  start , 2. deletecount 3. element1 4. element2


// var number = [10, 20, 30, 40, 50, 55];
// number.splice(2, 1);

// 30 number is delete

// number.splice(2, 1, 100 , 200);
//30 number is delete , then add 100 , 200 replacing 30

// number.splice(2, 0, 100 , 200);
//30 number is not delete , then add 100 , 200 before 30