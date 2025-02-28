//for

for (let i = 0; i <= 10; i++) { //control flow-initializes i = 0, then checks i condition and enters loop,
    //performs function or necessary statements and then before exiting loop goes to increment
    const element = i;
    if(element==5){
        console.log("5 is best")
    }
    console.log(element)
}

for (let i = 1; i < 10; i++) {
    console.log(`outer lop ${i}`)
    for (let a = 1; a < 10; a++) {
        //console.log(`inner loop ${a} amd inner loop i ${i}`)
        //console.log(i + '*' + a + ' = ' + i*a)
    }
    
}

let myArray = ["flash","batman","superman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) { //array length counts from 0
    const element = myArray[index];
    console.log(element)
}

//break and continue

for (let index = 0; index <= 20; index++) { //copy down--alt+shift +down arrow 
    if(index ==5){
        console.log("detected 5")
        break;//comes out for once and for all
    }
    console.log(index)    
}
for (let index = 0; index <= 20; index++) {
    if(index ==5){
        console.log("detected 5")
        continue; //condition skips for 1 time but doesnt come out of the loop
    }
    console.log(index)    
}