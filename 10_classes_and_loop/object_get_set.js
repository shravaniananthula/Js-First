const User ={
    _email:'shrav@gmail.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)//factory function. everytime we use constructor function
console.log(tea.email);

