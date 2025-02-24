const marvel_heros = ["thor","ironman",'SPIDERMAN']
const dc = ["superman", "flash","batman"]

//marvel_heros.push(dc) // push returns on existing array but does not join properly
//console.log(marvel_heros[3][1])

const xyz = marvel_heros.concat(dc) // in concat you need to create another array to join arrays
console.log(xyz)

const all_heros = [...marvel_heros, ...dc] //this is spread operator you just add ...before arrays
//and spread operators joins arrays
console.log(all_heros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7],[4,5]]

const realArray = anotherArray.flat(Infinity) //flat- returns new array with all sub-array elemnts together
//mention till what depth you want sub-array elements concatenated
console.log(realArray)


console.log(Array.isArray(dc)) //checks if this array exists or not
console.log(Array.from("shravani")) //makes an array
console.log(Array.from({name:"shravani"})) //interesting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3)) //creates new array from many variables/arrays