function multiplyBy5(num) {
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)
//prototype gives properties and methods which can be shared among other objects without creating seperate copies
//object is set of key value pairs of properties and methods

function createUser(username,score){
    this.username =  username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    console.log(this.score)
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)//jisne bhi pucha uska score batao
}
const chai = new createUser('chai',25)
const tea = new createUser('tea',250)

chai.increment()
//so first constructor function is written which has few properties and methods. 
// now to access it you can send arguments from new keyword so new instance is created 
//  means it has its own copy. so it consists of all the prototype methods in all instances. 
// now to reduce the memory we add function inside prototype so acts as a shared blueprint which 
// shares properties and methods to other objects. now you create objects/instances using new 
// keyword passing arguments and storing in variables. then here an empty object is created and 
// the constructor function prototypes methods are shared to these objects. 
// then at last the prototype methods can be accessed by new objects/instances using .

//"this" keyword is used when and when empty object is created, it gets constructor function prototype
//  methods.
//  constructor function is called then "this" now refers to this new instance. 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/