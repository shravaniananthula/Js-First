//array

const myArr = [0,1,2,3,4,5] //it creates shallow copy like heap
const myHeros = ["superman", "shaktiman"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[0])

//Array methods

myArr.push(6,7)
myArr.pop()
myArr.unshift(9) // adds element at start of array
myArr.shift() //removes element at start of array

console.log(myArr.includes("shrav"))//value type is boolean of result
console.log(myArr.indexOf(90))//gives -1 when it doesnt exist

const newArr = myArr.join() //join binds array and converts into string

console.log(myArr)
console.log(typeof newArr)

//slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3) // it gives new array where it does not include last range and 
// slice does not manipulate original array

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3) //it manipulates original array and includes last range
console.log("C", myArr)

console.log(myn2)

