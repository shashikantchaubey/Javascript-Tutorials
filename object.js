
let mySym = Symbol('key1');

let jsUser = {

    name:"Raj",
    age: 18,
    [mySym]: 'New Key word',
    location: 'delhi',
    email: 'shashikantchaubey3@gmail.com',
    isLoggedIn: true,
    lastLoggedDays:['monday', 'wednesday']

}


console.log(jsUser);

// console.log(jsUser.age)
// console.log(jsUser.email)

// console.log(jsUser['email']);
console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));


// Merge object using assign property
let obj1 = {1: 'a', 2: 'b'};
let obj2 = {3:'c', 4:'d'};

let obj3 =Object.assign({}, obj1, obj2);
console.log(obj3);


// Object Deconstructor............
const {lastLoggedDays: llD} = jsUser;

console.log(llD);

//Use of this keyword.....
//This is used to denote the current context. 
const newObj = {
   name: 'Hitesh',
   age: 21,

   welcomeMessage: function(){

        console.log(`${this.name}, welcome to this page`);

   }
}
newObj.welcomeMessage();
newObj.name = "Raj";
newObj.welcomeMessage();