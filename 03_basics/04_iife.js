//Immediately Invoked Function Expression
//use iife when you dont want to pollute block scope with global variables
//function which executes immediately
(function chai(){
    //named IIFE
    console.log("DB CONNECTED")
})(); //you need to add ; to end the function
((name)=>{console.log(`jfvh ${name}`)})("shravani") //-- first you write function definition then execution
//this is unamed IIFE
//chai()

