const user = {
    username:"shrvani",
    loginCount:8,
    signedIn:true,
    getUserDetails: function(){
        //console.log('got user details from database')
        //console.log(`username${this.username}`);
        console.log(this);
        
    }
}//object literal consists of properties
//this keyword is used for the current context{}
//for better code reusability instead of using same things again we use constructor functions
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log({})

//const promise1 = new Promise()
const date = new Date()
//using one object/object literal you can use multiple instances

function User(username, loginCount, signedIn){
   this.username= username
   this.loginCount = loginCount
   this.signedIn = signedIn

   this.greeting = function(){
    console.log(`welcome${this.username}`);
    
   }
   return this//you dont need to write return so it is implicity defined.
}

const userOne = new User('shrav',11,true)
const usertwo = new User('chai',9,false)//this overwrites all the values
console.log(userOne);
console.log(userOne.constructor);
console.log(usertwo.greeting());

//new is constructor function
//constructor function uses new keyword gives new copy/instance everytime and it doesnt affect original
/*STEP-1:whenever new keyword is used an empty object is creates which is known as instance
STEP-2: constructor function is called due to new keyword and NEW packs all arguments and gives u
STEP-3: arguments are injected in this keyword
STEP-4:you get them
*/
