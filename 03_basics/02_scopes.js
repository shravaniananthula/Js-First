var c = 300//global scope
let a= 300
if(true){ //{}-called as scope //this is BLOCK/local scope
let a = 10
const b =20
console.log("INNER LOOP",a)
var c = 30 //var is not block scoped

} 

//console.log(a)
//console.log(b)
//console.log(c)
function one(){
    const username = "shravani"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username ="shrav"
    if(username === "shrav"){
        const website = " yutbe"
        console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)


// +++++++++++++++++++++++ interesting +++++++++++++++++++++

console.log(addone(5))
function addone(num){ //function declaration
    return num +1
}

//addTwo(5) //you cannot call function before declaring in function expression
const addTwo = function(num){ //function expression
    return num + 2
}
addTwo(5)
