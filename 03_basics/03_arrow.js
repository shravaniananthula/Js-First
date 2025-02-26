const user = {
    username:"Shravani",
    price:999,
    
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        //console.log(this)
    }
}

user.welcomeMessage()
user.username ="shiny"
user.welcomeMessage()

console.log(this)//in node env it shows {}empty object
//in windows it shows window object 

// function chai(){
//     let username = "shravani"
//     console.log(this) //this- in function 
// }
// chai()

//++++++++++++++ARROW FUNCTIONS+++++++++++

const chai = () => {
         let username = "shravani"
         console.log(this) //this- in function 
     }
     chai()

const addTwo = (num1,num2)=>{
    return num1+num2
}

const addTw = (num1,num2)=>  num1+num2 //known as implicit return and is 1 line statement

const add = (num1,num2)=>  (num1+num2) //when paranthesis is used no need to use return

const addT = (num1,num2)=>  ({username:"shravani"})//to return object wrap in paranthesis
console.log(addT(2,10))
