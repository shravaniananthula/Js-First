//if
const isUserLoggedIn = true
const temperature = 41

if(temperature<50){
    console.log("less than 50")
}
else
{console.log("temp is greater than 50")}
//<,>,<=,>=,==,!=,===,!==

const score = 200

if(score>100){
    const power ="fly"
    console.log(`user power${power}`)
}
//console.log(`user power${power}`)


const balance = 1000
if(balance>500) console.log("test"),//you can add comma and write in multiple lines without scope in IF
console.log("test2")

if(balance<500){
    console.log("less than")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else
console.log("less than 1200")

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(UserLoggedIn && debitCard&& 2==3){
    console.log("allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("logged in")
}
