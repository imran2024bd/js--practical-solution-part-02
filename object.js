//primitive
// Basics
// const age = 21;
// const school = 'gouripur';
// const isPassed = true;
// let isDeveloper;
// console.log(isDeveloper);
// const subjects = ['bangla', 'English' , 'Physics', 'Math'];

// objects  variable
//Non-primitive
// const bottle = {
//     brand: 'apple',
//     price: 45,
//     color : 'white',
//     isClean : false
// }

// const subject ={
//     name : 'biology',
//     teacher : 'mukter',
//     examDate:'30 Feb',
//     chapters: [ 'first' , 'second','third'],
//     exams :{
// marks: 100;
// time: 180 ;
//     }
// }

// Multiple Ways To Get _ Set Object Properties

const person = {
    name: 'imran',
    age: 38,
    profession: 'developer',
    salary:25000,
    married:true,
    'fav places': ['bandarban', 'saintmartin']
}
console.log(person);
// Dot notation
console.log(person.profession);
const income = person.salary
console.log(income);


// bracket Notation === >>>>>>>>> to find the value of 
console.log(person['age']);
const old = person['age'];
console.log(old);

// to change string property value
// person.salary=30000;
// person['age'] = 40;
// person['fav places'] = ['malyasia'];
// console.log(person);

// to find the string property value
// const keyName = 'profession';
// console.log(person[keyName]);
// to change string property value
// const propName = 'profession';
// person[propName] = 'banker';
// console.log(person);


//*********************************************************************** */

//Keys, Values, Nested Objects And Delete
// to find the keys in a string
// const computer ={
// brand: 'dell',
// price:60000,
// processor: 'corei',
// hdd: '512gb',
// monitor: 'hp'
// }

//************  to find the key in a object************
// const keys = Object.keys(computer);
// console.log(keys);
// const Keys = Object.keys(computer);
// console.log(Keys);

// ****************to find the values in a string***************
// const values = Object.values(computer);
// console.log(values);

//******************** */ to use nested in a object******************

// const college ={
//     name: 'VNC',
//     class: ['9','10','11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 Feb'],
//     unique:{
//         color: 'blue',
//         result:{
//             gpa: 5,
//             merit: 'top'
//         }
//     }

// }

//************  to find the key in a object************
// const cName = Object.keys(college);
// console.log(cName);

// to find name
// console.log(college.name);
// to find unique
// console.log(college.unique);
// to find color
// console.log(college.unique.color);
// to find gpa
// console.log(college.unique.result.gpa);

// change value of merit in college.unique.result
// college.unique.result.merit = 'toper';
// console.log(college);

// to find bijoy dibos in events
// console.log(college.events[1]);

// to change bijoy dibos in events
// college.events[1] = '16 December';
// console.log(college.events[1]);

// to delete class 
// delete college.class;
// console.log(college);


//************************************************************************************

// 19_8 Loop An Object And Ways To Declare An Object

// const mobile ={
//     brand: 'samsung',
//     price:25000,
//     color: 'black',
//     camera: '12mp',
//     isNew: true

// }
// for of useed in array Property
// for in useed in object Property

 //************To find the object properties by for in formula ********************
//  for( const prop in mobile){
//     console.log(prop);
//  }
//  result => => => => => => => =>
//  brand
// price 
// color 
// camera

//************To find the object properties by for in formula ********************

// for( const key in mobile){
//     console.log(key);
// }

//************To find the object properties and value by for in formula ********************
// for( const key in mobile){
//     console.log(key,':' ,mobile[key] );
// }


//************* */ to Declear objet in various way *************
// 1
const mobile ={
    brand: 'samsung',
    price:25000,
    color: 'black',
    camera: '12mp',
    isNew: true

}

// 2
// const pen = { brand: 'econo', price: 10 , color: 'black'}
// const pencil = new Object();
// console.log(pencil);
// const rubber = Object.create({});
// console.log(rubber);


// ************************************************************************

// ***************19_9 Module Summary And Practice Tasks
