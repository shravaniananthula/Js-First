//singleton

//object literals
//Object.create ----constructor way

const mySym = Symbol("newS")

const jsUser = {
    name:"shravani",
    "full name":"shravani ananthula",
    [mySym]:"key1",
    age: 20,
    location:"jaipur",
    email:"shravani.amamzon.com",
    isLoggeedIn: false,
    lastlogin: ["mon","tue"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

//Object.freeze(jsUser)
jsUser.age = 30
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(jsUser.greeting()) //if you dont give() then function wont be executed but just referred

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)//this gives access to all properties of object
}
console.log(jsUser.greetingTwo())