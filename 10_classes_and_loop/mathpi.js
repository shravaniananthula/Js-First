const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)
// console.log(Math)//math is also an object

//const myNewObj = Object.create(null)//factory function

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable: true,
    orderchai: function(){
        console.log('chai nahi');
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
//this shows the properties of name
Object.defineProperty(chai,'name',{ //using this u can edit that characteristic of property
    writable: false,
    //enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
    console.log(`${key}:${value}`);
    }
}
//this for of loop prints an array using object.entries 
chai.name ='shrav'
console.log(chai.name);
//after adding writable as false this name doesnt change no matter what