const userEmail =[]

if(userEmail){
    console.log("got it")
}
else{
    console.log("dont have")
}

//falsy values

//false,0,"",-0,BigInt,null,undefined,NaN,0n

//truthy values

//true, "0",'false'," ", [],{}, function(){}

if(userEmail.length === 0){
    console.log("array is empty")
}
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//Nullish Coalescing Operator (??): null undefined

let val1
val1 =5 ?? 10
val1=null??10
val1 =undefined??15
val1=null??10??20 //here it assigns first value
console.log(val1)

//Terniary operator

//condition?true:false

const iceTea = 100
iceTea <= 80 ? console.log("more than 80") : console.log("less")
