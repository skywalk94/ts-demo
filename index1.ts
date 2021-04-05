// 函数声明
function fuc(): string {
    return "123"
}

// 匿名函数
var fuc1 = function (): number {
    return 123
}

// 函数传参
function getName(name: string): void { }
getName("wePanda")

// 配置方法可选参数
function getInfo(name: string, age?: number): void { }
getInfo("wePanda")

// 配置默认参数
function getAge(age: number = 23): void { }
getAge()

// 剩余参数
// 使用三点运算符接收新传递的参数
function sum(a: number, ...result: number[]): number {
    let sum: any = a
    for (let i in result) {
        sum += result[i]
    }
    return sum
}
sum(1, 1, 2, 3)

// 函数重载
function same(a: string): string;
function same(b: number): number;
function same(str: any): any {
    if (typeof str == "string") {
        return "a=" + str
    } else {
        return "b=" + str
    }
}
same("aoe")