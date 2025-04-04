class User{ //class has a constructor and other methods all methods can access the constructor values
    constructor(username){
        this.username =username
    }
    logMe(){//this logme is not saved in instance when it is created but it is added in prototype of User
        console.log(`username is ${this.username}`);
        
    }
    static createId(){//static stops access to the function even if it is inherited
        console.log(`123`)
    }
}

const shravani = new User('shravani')
//shravani.createId()

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher('iphone15','iphone@gmail.com')
iphone.createId()