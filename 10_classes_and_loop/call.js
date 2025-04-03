function setUsername(username){
    //complex db calls
    this.username = username
    console.log('called')
}

function createUser(username,email,password){
    setUsername.call(this,username) //to hold the reference of this method you use .call
    //as when setusername finishes it work it is out of call stack and its data too.
    //here this is passed as a parameter saying take my this and put data in this even if setusername goes
    //current execution context is passed to another function
    //it invokes a fucntion with specified this context
    this.email=email
    this.password=password
}

const chai = new createUser('chai','chai@gmail.com','123')
console.log(chai);
