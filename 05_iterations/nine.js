const myNums = [1,2,3,9]

const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc ${acc} and currvalue ${currval}`)
    return acc+currval
},0)//whatever value is given after comma the accumulator takes it first time
console.log(myTotal)

const myTot = myNums.reduce((acc,curr)=> acc+curr, 2)
console.log(myTot)

const shoppingCart = [
    {
        itemName: "js course",
        price:2999,
    },
    {
        itemName: "python",
        price:999,
    },
    {
        itemName: "mobile dev",
        price:5999,
    },
    {
        itemName: "data science",
        price:12999,
    }
]
const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay)