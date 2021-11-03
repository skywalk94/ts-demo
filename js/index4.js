"use strict";
function getName(name) {
    console.log(name);
}
getName({ firstName: "任", lastName: "我行" });
var md5 = function (key, value) {
    return key + value;
};
console.log(md5("name", "任我行"));
