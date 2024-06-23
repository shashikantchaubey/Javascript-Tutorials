

let promise = new Promise(function(resolve,reject){

    setTimeout(function(){
        
        resolve({
            'name': 'shashikant Chaubey',
            'email': "shashikantchaubey3@gmail.com"
        })
        console.log("Async code Promise");
    })

}).then(function(user){

    console.log(user);
    return user.name;


}).then(function(name){
    console.log(name)


})


//new Promise

let newPromises= new Promise(function(resolve, reject){
    
    setTimeout(function(){

        let error = true;
        if(!error){
            console.log("There is no error");
            resolve({
                'user': 'shashikantchaubey',
                'password': 'abc@124'
            });
        }
        else{
            reject("There is an error");
        }
    })
}).then(function(user){
    // console.log(user);
}).catch(function(error){
    // console.log(error)
})

//

fetch('https://api.github.com/users/shashikantchaubey')
.then((response) => {
    return response.json()

}).then((data) => {

    console.log(data)
})