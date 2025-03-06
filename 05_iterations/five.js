const coding = ["JS","ruby","java","python","cpp"]
//higher order function
coding.forEach( function(item){
    console.log(item)
}) //callback fntcn does not have name

coding.forEach((item) => {console.log(item)})//arrow functions

function printme(item){
    console.log(item)
}
coding.forEach(printme) //just give reference

coding.forEach((item, index,arr)=>{console.log(item,index,arr)})

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    }
]

myCoding.forEach((item)=>{ //to get data from multiple objects in a array
    console.log(item.languageName)
})
