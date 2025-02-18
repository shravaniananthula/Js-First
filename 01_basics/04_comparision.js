//comparision and equality operators work differently
//comparision operater automatically converts null to number, treating it as 0

console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0)//true

// === 
console.log("2" == 2)//checks only value
console.log("2" === 2)// CHECKS OPERATor 