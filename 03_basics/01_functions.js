
function sayMyName(){
console.log('S')
console.log('H')
console.log('R')
console.log('A')
console.log('V')
console.log('A')
console.log('N')
console.log('I')
}
sayMyName() //reference of function

// function add(a,b){ //here these are called parameters & while calling function you pass arguments
//     console.log(a+b)
// }
function add(a,b){
    return a+b
    console.log("shravani") //doesnt read anything after return
}
const result = add(1,2)//output is Nan when you dont give arguments
console.log(result)

function loginUserMessage(username){
    if(!username){ //falsy values- undefined,"",0,-0,null,NaN
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()) //when you dont pass anything it shows undefined
//the arguments here override the parameters given at the function definition

function calculateCartPrice(val1,val2,...num1){ //rest operator
    return num1 //returns array when rest operator used
}

console.log(calculateCartPrice(200,300,400))

const user ={
    username: "shravani",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `)
}
//handleObject(user)
handleObject({
    username: "shravani",
    price:200
}) //you can pass object to a function in this way also

const myNewArray = [200,400,600,800]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,600,800,1000]))