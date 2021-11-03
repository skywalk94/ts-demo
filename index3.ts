abstract class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    abstract eat(): any
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        console.log(this.name + "吃肉")
    }
}

var dog = new Dog("狗")
dog.eat()