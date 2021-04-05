"use strict";
// 基本数据类型
// 布尔类型 (boolean)
var flag = true;
//数字类型 (number)
var num = 123;
// 字符串类型 (string)
var str = "hello ts"; //字符串类型
// 数组类型 (Array)
// 1
var arr = [1, 2, 3, 4, 5];
// 2
var arr1 = ["6", "7", "8", "9", "10"];
// 元祖类型 (tuple) 
// 可指定数组包含多种类型数据
var tup = ["123", 456, true]; //对应顺序要一致
// 枚举类型 (enum)
var mode;
(function (mode) {
    mode[mode["success"] = 1] = "success";
    mode[mode["error"] = 0] = "error";
})(mode || (mode = {})); //if 不赋值打印索引值
var suc = mode.success; // suc=1
// 任意类型 (any)
var all = "所有类型";
// null和undefined
var unde; //定义未赋值，输出undefined
var nu; // nu只能赋值 null
// void类型
// 一般定义方法没有返回值 return
function func() { }
function func1() {
    return "ts";
}
