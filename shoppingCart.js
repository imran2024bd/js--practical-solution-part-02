const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]

function cartTotal(param) {
    // console.log(param);
    let total = 0;
    for ( const product of param){
        // console.log(product);
        const perProductCost = product.price * product.quantity;
        total = total + perProductCost;
    }
    return total ;
    
}
const shopingcost = cartTotal(products);
console.log(shopingcost);

// output => => 5600