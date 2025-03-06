//for of--array loops
//you use for of loop when you have the below pattern in an array
//["","",""]
//[{},{},{}] ---for this you can use for each loop

const arr = ["shrav","reddy","anan"]

for (const num of arr) {
    console.log(num)
}

const greetings = "hello world" //each characted is printed
for(const greet of greetings){
    console.log(`each char is printed ${greet}`)
}

//MAPS
//map is also an object holds key-value pair with unique values with same order
//for in loop does not work with map,arrays,sets as it is iterable
const map = new Map()
map.set('IN', "india")
map.set('US', "united states")
map.set('FR', "france")
map.set('IN', "india") //doesnt print india again as it takes unique values only

console.log(map)

for (const [i,value] of map) { //here de-structuring of maps is used as we have key-value pairs
    console.log(i,value)
}

//forOf loop doesnt work for objects as it is not iterable
// const myObj = {
//     game1:"NFS",
//     game2:"spiderman"
// }

// for (const [key, value] of myObj) {
//     console.log(key,value)
// }
