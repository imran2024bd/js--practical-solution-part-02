// starting string variable
// Strings are for storing text
// Strings are written with quotes , use single or double quotes:, 
// Templates are strings enclosed in backticks (`This is a template string`).
// Code	Result	Description
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash


// const country = 'bangledesh';
// // console.log(country);
// const address = '712 22 3';
// const capital = 'dhaka';
// const district = 'Natore';
// const sentence = 'i love my country';

// console.log(country.toUpperCase);

///*************************************************************************************** */
// reverse result = " .yrtnuoc ym ...............";

// const sentence = 'i love my country.';
// let reverse = '';
// for ( const letter of sentence) {
//     // console.log(letter);
//     reverse = letter + reverse;
    
// }

// console.log(reverse);

//////////******************************************************************* */

// string reversing by for loop 

// let rev = '';
// for (let i = 0; i < sentence.length; i++) {
// //    console.log(i);
// // console.log(sentence[i]);
// const letter = sentence[i];
// // console.log(letter);
// rev = letter + rev ;
    
// }
// console.log(rev);


//////////******************************************************************* */

// shortcut way to reverse
const sentence = 'i love my country.';
const reversed = sentence.split('').reverse().join(' ');
console.log(reversed);

