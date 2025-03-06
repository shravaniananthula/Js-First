const coding = ["JS","ruby","java","python","cpp"]

const values = coding.forEach((item)=>{ //forEach doesnt return any value
    //console.log(item)
    return item
})

console.log(values)

const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> (num > 4)) //if () given it returns automatically
    //but if {} is given you should write return keyword
    //in filter u have to give condition based on that
//you get results and some values will be returned and some will not
console.log(newNums)

const newNum = myNums.filter((num)=>{ //as i am giving {} i should return keyword
    return num >4
})
console.log(newNum)


const newArr = []
myNums.forEach((num)=> {
    if(num >4 ){
        newArr.push(num)
    }
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
