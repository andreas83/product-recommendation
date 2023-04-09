//purpose: get product recommendation for a user based on the items in the cart

//training data

const trainingData = [
    {similarity:0, items:[1,2,3]},
    {similarity:0, items:[2,3,4]},
    {similarity:0, items:[1,3,5]},
    {similarity:0, items:[1,2,3,4]},
    {similarity:0, items:[1,2,3,5]},
    {similarity:0, items:[1,2,3,4,5,455]},
    {similarity:0, items:[1,2,3,4,5,6]},

];

//current items from the cart
const cartItems = [1,2,4];

//calculate similarity
trainingData.forEach(element => {
    element.similarity = element.items.filter(x => cartItems.includes(x)).length;
});

//sort the array based on similarity
trainingData.sort((a,b) => (a.similarity < b.similarity) ? 1 : -1);

//get the top 3 items
const top3 = trainingData.slice(0,3);
//console.log(top3);

//remove items that are already in the cart
let recomondation = top3.map(x => x.items.filter(y => !cartItems.includes(y))).flat();

//remove duplicates
recomondation = [...new Set(recomondation)];

console.log(recomondation);
