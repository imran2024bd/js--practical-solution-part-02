/** wood quantity per 
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
*/
function furnitureCost(chairQuantity , tableQuantity, bedQuantity) {
    const perChairwood = 3;
    const perTablewood = 10;
    const perBedwood = 50;

    const chairTotalwood = chairQuantity * perChairwood;
    const tableTotalwood = tableQuantity * perTablewood;
    const bedTotalwood = bedQuantity * perBedwood;

    const totalWood = chairTotalwood + tableTotalwood + bedTotalwood;

    return totalWood;
    
}
const totalFurniturewood = furnitureCost(1,2,2);
// console.log(totalFurniturewood);


// *******************************************************************************

/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 * 
*/


function dressCost(shirtQuantity, pantQuantity , shoeQuantity) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900
    const totalShirtprice = shirtPrice * shirtQuantity;
    const totalPantprice = pantPrice * pantQuantity;
    const totalShoeprice = shoePrice * shoeQuantity;
    const totalCost = totalShirtprice + totalPantprice + totalShoeprice;
    return totalCost;
}

const total = dressCost ( 2, 1, 3);
console.log(total);