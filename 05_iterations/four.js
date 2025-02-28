const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
//for objects we use for in loop
//maps do not use for in loop
for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`)
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key])
}

const map = new Map()//map is not iteratable
map.set('IN', "india")
map.set('US', "united states")
map.set('FR', "france")
map.set('IN', "india") //doesnt print india again as it takes unique values only

for (const key in map) {
   console.log(key)
}