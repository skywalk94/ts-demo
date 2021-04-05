"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + "在运动");
    };
    return Person;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        return _super.call(this, name) || this; //初始化父类的函数
    }
    Human.prototype.work = function () {
        console.log(this.name + "在工作");
    };
    return Human;
}(Person));
var hum = new Human("张三");
hum.work();
// 类的属性和函数修饰符
// public     公有  在类里面、子类、、类外部都可以访问
// protected  保护  在类里面、子类可以访问 
// private    私有  在类里面可以访问 
// 属性不加修饰符默认 public
