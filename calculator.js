function add(num1 , num2) {
    const sum = num1 + num2;
    return sum;   
}
// console.log(add( 5,2));

function subtract(num1 , num2) {
    return num1 - num2;
}
// console.log(subtract(5, 2));

function multiply(num1 , num2) {
    return num1 * num2
}
// console.log(multiply(5,2));

function divide(num1 , num2) {
    return num1 / num2;
}
// console.log(divide(10,2));

function calculator(a,b,operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
   else if (operation === 'subtract') {
    return subtract(a,b);
        
    }
   else if (operation === 'multiply') {
    return multiply( a , b);
        
    }
   else if (operation === 'divide') {
    return divide( a , b);
        
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
    }
       
}
// const result = calculator(15,5,'add');
// const result = calculator(5,2,'subtract');
const result = calculator(5,6,'multiply');
// const result = calculator(5,2,'divide');
console.log(result);



// programming hero Coding

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        return multiply(a, b);
    }
    else if (operation === 'divide'){
        return divide(a, b);
    }
    else {
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
    }
}


const result = calculator(5, 7, 'add');
console.log(result);