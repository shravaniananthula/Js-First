class User{
    constructor(username){
        this.username = username
        
    }
    logMe(){
        return `username is ${this.username}`;
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)//inheritance-assigns username using another class
        this.email=email
        this.password=password
    }
    addCourse(){
        return `new course waas added by ${this.username}`;
        
    }
}
const chai = new Teacher('chai','chai@gmail.com','123')
console.log(chai.addCourse())
const coffee = new User('coffee')
console.log(coffee.logMe());
console.log(chai.logMe());

console.log(chai instanceof User);//checks if chai is an instance of teacher

