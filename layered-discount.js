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
