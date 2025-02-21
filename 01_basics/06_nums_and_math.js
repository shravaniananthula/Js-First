const score = 400
console.log(score)
const balance = new Number(100) // this shows all methods of numbers
//console.log(balance)

const xyz = balance.toString()
//console.log("fh",xyz)
//toString method

console.log(balance.toFixed(2))
//toFixed- after decimal i get 2 digit

const otherNum = 123.8934
console.log(otherNum.toPrecision(4))
//toPrecision- rounds off the nearest number and 4 is number of digits which appear

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
//toLocaleString- gives with commas clearly and in us standards by default

//***********************MATHS****************** 

console.log(Math);
console.log(Math.abs(-4)) //negative value becomes positive in absolute
console.log(Math.round(4.6)) //rounds of accordingly
console.log(Math.ceil(4.1)) // rounds of to high value
console.log(Math.floor(4.9)) // rounds of to nearest lowest value
console.log(Math.sqrt(4))
console.log(Math.pow(4,2))
console.log(Math.min(2,34,56,6))

console.log(Math.random()) // value is always btw 0 and 1 
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)

