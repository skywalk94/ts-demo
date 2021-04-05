class Person {
    public name: string
    constructor(name: string) { //构造函数，实例化的时候触发的方法
        this.name = name
    }
    public run(): void {
        console.log(this.name + "在运动")
    }
}

class Human extends Person {
    constructor(name: string) {
        super(name) //初始化父类的函数
    }
    work(): void {
        console.log(this.name + "在工作")
    }
}
var hum = new Human("张三")
hum.work()

// 类的属性和函数修饰符
// public     公有  在类里面、子类、、类外部都可以访问
// protected  保护  在类里面、子类可以访问 
// private    私有  在类里面可以访问 
// 属性不加修饰符默认 public