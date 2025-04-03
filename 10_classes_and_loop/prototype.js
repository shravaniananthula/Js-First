// let myName = 'shravani    '
// let myLastName = 'ananthula    '

//console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ['thor','spiderman']

let heroPower = {
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.shravani = function(){ //you are adding shravani method in object now everyone can access it
    console.log('shravani is present in all objects')
}

Array.prototype.reddy = function(){//here only arrays can access this reddy function
    console.log('reddy says hi');
    
}
//heroPower.shravani()
myHeros.shravani()
//heroPower.reddy()
myHeros.reddy()

//inheritance

const User={
    name:'chai',
    email:'google.com'
}
const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)//teacher properties goes to teachingsupport
console.log(TeachingSupport.makevideo)
let anotherUserName = 'ChaiAurCode    '

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}
anotherUserName.truelength()
'icetea'.truelength()