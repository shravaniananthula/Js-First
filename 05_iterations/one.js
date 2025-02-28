//for

for (let i = 0; i <= 10; i++) {
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

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}