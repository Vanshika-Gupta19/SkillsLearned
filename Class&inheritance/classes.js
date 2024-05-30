class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const sam = new User("sam", "sam@gmail.com", "123")
console.log(sam.encryptPassword());  //123abc
console.log(sam.changeUsername());   //SAM




class Animal{
    constrctor(name){
        this.name = name;
        console.log("object is created...")
    }

    eats(){
        console.log("eating");
    }

    jump(){
        console.log("jumping");
    }
}

let b = new Animal("bunny");
console.log(b.eats()); //eating
console.log(b.jump()); //jumping
