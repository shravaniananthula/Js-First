let myDate = new Date() //this is object/instance of date
console.log(myDate.toString())
//objects/instances have been created from a constructor function
//constructor function serves as the blueprint, and each object created from it is an instance
//The constructor method is a special method for creating and initializing an object 
// created with a class

console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreated = new Date(2023, 0, 23)
console.log(myCreated.toDateString()) 

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString())

let CreatedDate = new Date("01-14-2023")
console.log(CreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) //millisec from 1970
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))