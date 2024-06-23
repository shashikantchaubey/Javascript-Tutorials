
const map = new Map();
map.set('Ind', 'India')
map.set('USA', "United State of America")
map.set('UK', "United Kingdom");

// console.log(map);

for(const [key, value] of map){
    console.log(`${key} are the shortcut of ${value}`);
}


// filter

const myNum = [1,2,3,4,5,6,7,8,9,10]

newNums = myNum.filter( (num) =>{
    return num>4;
})
// console.log(newNums)

// const new1 = []
// myNum.forEach( () => {
//     new1.push(myNum)
// })

// console.log(new1)



