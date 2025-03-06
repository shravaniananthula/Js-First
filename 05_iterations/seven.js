const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums= myNums.map((num)=>num+10)//map creates a new array & foreach does not return new array
const result = []
myNums.forEach((value)=>{ //in forEach u need to manually push values into new array
    if(value){
        result.push(value + 10)
    }
    })
console.log(result);

const some = myNums
.map((num)=>num*10)
.map((num)=>num +1)
.filter((num)=>num>=40)
console.log(some)
