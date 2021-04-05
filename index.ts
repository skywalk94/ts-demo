// 基本数据类型

// 布尔类型 (boolean)
let flag: boolean = true

//数字类型 (number)
let num: number = 123

// 字符串类型 (string)
let str: string = "hello ts"  //字符串类型

// 数组类型 (Array)
// 1
let arr: number[] = [1, 2, 3, 4, 5]

// 2
let arr1: Array<string> = ["6", "7", "8", "9", "10"]


// 元祖类型 (tuple) 
// 可指定数组包含多种类型数据
let tup: [string, number, boolean] = ["123", 456, true]  //对应顺序要一致

// 枚举类型 (enum)
enum mode { success = 1, error = 0 } //if 不赋值打印索引值
let suc: mode = mode.success  // suc=1

// 任意类型 (any)
let all: any = "所有类型"

// null和undefined
let unde: string | undefined //定义未赋值，输出undefined

let nu: null | undefined // nu只能赋值 null

// void类型
// 一般定义方法没有返回值 return
function func(): void { }

function func1(): string {
    return "ts"
}