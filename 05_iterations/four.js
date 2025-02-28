const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
//for objects we use for in loop
for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`)
}