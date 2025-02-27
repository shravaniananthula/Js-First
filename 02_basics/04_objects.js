const tinderUser = new Object() //singleton object
const instaUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "shrav"
tinderUser.isLoggedIn = false
console.log(tinderUser, instaUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"shravani",
            lastname:"ananthula"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2) //copies all objects from source to target=> (target,source)


const obj3={...obj1,...obj2}//spread operator
console.log(obj3)

const users =[
    {
        id:1,
        email:"vip@gmail.com"
    },
    {
        id:2,
        email:"p@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))//puts the keys of the object together in array
console.log(Object.values(tinderUser))//puts the values of object in array
console.log(Object.entries(tinderUser))//puts each element index in single array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//checks if that property is available or not


const course = {
    coursename: 'js in hindi',
    price: 999,
    teacher: "shravani"
}

//course.teacher

const {teacher: inst} = course //de-structure an object 
//instead of typing course.teacher everywhere just use this syntax
console.log(inst)

// {
//     "name":"shravani",
//     "coursename":"js in hindi",
//     "price":"free"
// }
