/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/

function layeredDiscountedTotal(quantity) {
    const first100price = 100;
    const second100price= 90;
    const above200price = 70;
    if( quantity <= 100){
        const total = quantity * first100price;
        return total;
    }
    else if( quantity <= 200){
        const total100price = 100 * first100price;
        const  remainingquantity = 100 - quantity;
        const remainingtotal = remainingquantity * second100price;
        const total = total100price + remainingtotal;
        return total;
    }
    else{
        const total100price = 100 * first100price;
        const second100price = 100 * second100price;
        const remainingquantity = 200 - quantity;
        const remainingtotal = remainingquantity * 70;
        const total= total100price + second100price + remainingtotal;
        return total;

    }
    
}

const total = layeredDiscountedTotal(107);
console.log(total);


// programming hero Coding

/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/


function layeredDiscountedTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}


// practise part 

/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/

function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second101To200 = 90;
    const above200Price = 70;
    if (quantity <= 100) {
        const totalfirst100Price = first100Price * quantity;
        return totalfirst100Price;
    }
    else if (quantity <= 200) {
        const total100Price = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingQuantityprice =  remainingQuantity *second101To200;
        const totalsecond101To200price = total100Price + remainingQuantityprice;
        return totalsecond101To200price;

    }
    else if (quantity > 200) {
        const total100Price = 100 * first100Price;
        const total101To200price = 100 * second101To200;
        const remainingQuantity = quantity - 200;
        const remainingQuantityprice =  remainingQuantity * above200Price;
        const totalaboveTo200price = total100Price + total101To200price+ remainingQuantityprice;
        return totalaboveTo200price;

    }

}
console.log(layeredDiscountedTotal(201));