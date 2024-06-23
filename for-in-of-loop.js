 
 // for in loop uses in object..
const myObj = {
    cpp:"C++",
    Js: "Javascript ",
    py: "Python",
    c: " C"
}

for(const key in myObj){
    // console.log(key);
}

// in arrays...

const arr = ["js","c++","c","py","htm"];
// for(const value in arr){
//     console.log(value);
//     console.log(arr[value])


//for-each loop.....

const coding = ["js","c++","c","py","htm"]

coding.forEach( (index,item,value)=> {
    console.log(index,item,value)
})


