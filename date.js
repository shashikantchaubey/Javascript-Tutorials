
let todayDate = new Date();
console.log(todayDate);

let date1 = todayDate.toLocaleString();
console.log(date1);

let date2 = todayDate.toISOString();
console.log(date2)

let date3 = todayDate.toString();
console.log(date3)

console.log(`Date in ms is: ${Date.now()}`)
console.log(`Date in seconds is: ${Date.now()/1000}`)

let date4 = todayDate.toLocaleString('default', {
    
    weekday: 'long',
    day:'2-digit',
    month:'long',
    year:'numeric'
})
console.log(date4)
