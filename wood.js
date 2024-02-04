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
console.log(totalFurniturewood);