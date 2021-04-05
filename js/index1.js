"use strict";
// 函数声明
function fuc() {
    return "123";
}
// 匿名函数
var fuc1 = function () {
    return 123;
};
// 函数传参
function getName(name) { }
getName("wePanda");
// 配置方法可选参数
function getInfo(name, age) { }
getInfo("wePanda");
// 配置默认参数
function getAge(age) {
    if (age === void 0) { age = 23; }
}
getAge();
// 剩余参数
// 使用三点运算符接收新传递的参数
function sum(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i in result) {
        sum += result[i];
    }
    return sum;
}
sum(1, 1, 2, 3);
function same(str) {
    if (typeof str == "string") {
        return "a=" + str;
    }
    else {
        return "b=" + str;
    }
}
same("aoe");
