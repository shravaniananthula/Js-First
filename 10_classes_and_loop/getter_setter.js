class User{
    constructor(email,password){//u dont need to return this
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){//you dont return setters
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()//for any validation u use getter and setter or else you can access directly
    }
    set password(value){
        this._password = value
    }
}//if getter is there then setter has to be there

const shrav = new User('s@shrav','abc')
console.log(shrav.password);
console.log(shrav.email);

