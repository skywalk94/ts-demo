"use strict";
// 泛型，可以支持不特定的数据支持，
// 要求传入的参数和返回的参数一致
// T 表示定义泛型
function getData(value) {
    return value;
}
getData(123);
getData("123");
