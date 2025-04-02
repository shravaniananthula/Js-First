const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography,netowork call
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})//promise is object and it is created here

promiseOne.then(function(){
    console.log('promise consumed');
    
})

new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
    
}).then(function(){
    console.log('async2 resolved');
    
})

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username:"shravani",email:"shravani.reddy@gmail.com"})
    }, 1000);
})
promiseThree.then(function(username) {
    console.log(username)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =  true
        if(!error){
            resolve({username:"shravani",password:123})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{ //the values returned in top .then will be returned here
    console.log(username)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('the promise is either resolved or rejected')
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =  true
        if(!error){
            resolve({username:"javascript",password:123})
        }
        else{
            reject('ERROR: JS went wrong')
        } 
    },1000)
})

async function consumePromiseFive(){
    try {
    const response = await promiseFive //promise is object so you cannot consume like promisefive()
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() //response is coming in string form so convert to json
//     console.log(data)
//   } catch (error) {
//     console.log('E',error)
//   }
// }
//getAllUsers()

const check = fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))
