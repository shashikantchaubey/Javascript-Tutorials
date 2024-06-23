
const myNum = [1,2,3,4,5,6,7,8,9,10];

let newNum = myNum.reduce((acc, currval) => 
    {
        // console.log(` ${acc} and ${currval}`);
        return acc + currval 

    }, 0);
// console.log(newNum);


// Example of shopping cart


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let totPrice = shoppingCart.reduce((acc, item) => acc + item.price,0);
console.log(totPrice);