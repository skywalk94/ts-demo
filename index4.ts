// JSON类型接口约束
interface fullName {
    firstName: string
    lastName: string
    name?: string //可传可不传
}

function getName(name: fullName): void {
    console.log(name)
}

getName({ firstName: "任", lastName: "我行" })

// 函数类型接口约束
interface encrypt {
    (key: string, value: string): string
}

var md5: encrypt = function (key: string, value: string): string {
    return key + value
}

console.log(md5("name", "任我行"))