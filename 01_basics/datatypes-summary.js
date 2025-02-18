// Primitive- call by value(you give copy data and any changes are made to copy)

//7 types: String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 1//dynamically typed
const scoreVlue = 100.3
const loggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 342474878745874587455848n
console.log(typeof bigNumber)

//reference(non primitive) - the reference of this value is stored in memory

//Array, Objects, Functions

const heros = ["shravani", "vipin"]
let myObj = {
    name:"shravani",
    age:22,

}
const myFunction = function(){
     console.log('Hello world')
}
myFunction()
console.log(typeof bigNumber)

//return types of data types
//number is number
//string is string
//null is object
//undefined is undefined
//boolean is boolean
//bigInt is bigInt
//symbol is symbol


//function is function object
//object is object
//array is object
