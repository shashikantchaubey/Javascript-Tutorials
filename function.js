
function userLoggedInMessage(username){

    if(username === undefined){
        console.log("Please enter your name");
    }
    else if(username === ""){
        console.log("Please enter your valid name");
    }
    else{
        let message = `${username} is logged in our system..`;
        console.log(message);
        return message

    }
}

// (userLoggedInMessage("raju"))

const userData = {
    userName: "Rajesh",
    location: "Delhi"
}

function getUserData(getUser){

    console.log(getUser.userName);
    console.log(getUser.location)
}
getUserData(userData);